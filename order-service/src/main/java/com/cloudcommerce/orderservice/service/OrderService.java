package com.cloudcommerce.orderservice.service;

import com.cloudcommerce.orderservice.dto.OrderRequest;
import com.cloudcommerce.orderservice.dto.OrderResponse;

import java.util.List;

public interface OrderService {
    OrderResponse placeOrder(OrderRequest orderRequest);
    OrderResponse getOrderById(Long id);
    List<OrderResponse> getOrdersByUserId(Long userId);
    OrderResponse cancelOrder(Long id);
}
