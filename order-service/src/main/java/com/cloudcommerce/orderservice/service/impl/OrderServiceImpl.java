package com.cloudcommerce.orderservice.service.impl;

import com.cloudcommerce.common.exception.BusinessException;
import com.cloudcommerce.common.exception.ResourceNotFoundException;
import com.cloudcommerce.orderservice.client.ProductClient;
import com.cloudcommerce.orderservice.dto.OrderRequest;
import com.cloudcommerce.orderservice.dto.OrderResponse;
import com.cloudcommerce.orderservice.dto.ProductDto;
import com.cloudcommerce.orderservice.model.Order;
import com.cloudcommerce.orderservice.model.OrderItem;
import com.cloudcommerce.orderservice.model.OrderStatus;
import com.cloudcommerce.orderservice.repository.OrderRepository;
import com.cloudcommerce.orderservice.service.OrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final ProductClient productClient;
    private final KafkaTemplate<String, String> kafkaTemplate;

    @Override
    @Transactional
    public OrderResponse placeOrder(OrderRequest orderRequest) {
        log.info("Processando novo pedido para o usuário: {}", orderRequest.getUserId());

        Order order = Order.builder()
                .userId(orderRequest.getUserId())
                .status(OrderStatus.PENDING)
                .build();

        BigDecimal totalPrice = BigDecimal.ZERO;

        for (OrderRequest.OrderItemRequest itemRequest : orderRequest.getItems()) {
            // Chamada síncrona ao Product Service via Feign
            ProductDto product = productClient.getProductById(itemRequest.getProductId());

            if (product == null || !product.getActive()) {
                throw new BusinessException("Produto não disponível: " + itemRequest.getProductId());
            }

            if (product.getStock() < itemRequest.getQuantity()) {
                throw new BusinessException("Estoque insuficiente para o produto: " + product.getName());
            }

            OrderItem orderItem = OrderItem.builder()
                    .productId(product.getId())
                    .quantity(itemRequest.getQuantity())
                    .unitPrice(product.getPrice())
                    .order(order)
                    .build();

            order.addItem(orderItem);
            totalPrice = totalPrice.add(product.getPrice().multiply(BigDecimal.valueOf(itemRequest.getQuantity())));
        }

        order.setTotalPrice(totalPrice);
        Order savedOrder = orderRepository.save(order);

        log.info("Pedido criado com sucesso ID: {}", savedOrder.getId());

        // Publicar evento no Kafka
        kafkaTemplate.send("order-events", "Novo pedido criado ID: " + savedOrder.getId());

        return mapToResponse(savedOrder);
    }

    @Override
    public OrderResponse getOrderById(Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Pedido não encontrado ID: " + id));
        return mapToResponse(order);
    }

    @Override
    public List<OrderResponse> getOrdersByUserId(Long userId) {
        return orderRepository.findByUserId(userId).stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public OrderResponse cancelOrder(Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Pedido não encontrado ID: " + id));
        
        if (order.getStatus() != OrderStatus.PENDING) {
            throw new BusinessException("Apenas pedidos PENDENTES podem ser cancelados.");
        }

        order.setStatus(OrderStatus.CANCELLED);
        return mapToResponse(orderRepository.save(order));
    }

    private OrderResponse mapToResponse(Order order) {
        return OrderResponse.builder()
                .id(order.getId())
                .userId(order.getUserId())
                .totalPrice(order.getTotalPrice())
                .status(order.getStatus())
                .createdAt(order.getCreatedAt())
                .items(order.getItems().stream()
                        .map(item -> OrderResponse.OrderItemResponse.builder()
                                .productId(item.getProductId())
                                .quantity(item.getQuantity())
                                .unitPrice(item.getUnitPrice())
                                .build())
                        .collect(Collectors.toList()))
                .build();
    }
}
