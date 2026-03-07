package com.cloudcommerce.paymentservice.service.impl;

import com.cloudcommerce.common.exception.ResourceNotFoundException;
import com.cloudcommerce.paymentservice.dto.PaymentDto;
import com.cloudcommerce.paymentservice.model.Payment;
import com.cloudcommerce.paymentservice.model.PaymentStatus;
import com.cloudcommerce.paymentservice.repository.PaymentRepository;
import com.cloudcommerce.paymentservice.service.PaymentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository paymentRepository;
    private final KafkaTemplate<String, String> kafkaTemplate;

    @Override
    @Transactional
    public PaymentDto processPayment(PaymentDto paymentDto) {
        log.info("Processando pagamento para o pedido: {}", paymentDto.getOrderId());

        // Simulação de processamento de pagamento
        Payment payment = Payment.builder()
                .orderId(paymentDto.getOrderId())
                .amount(paymentDto.getAmount())
                .paymentMethod(paymentDto.getPaymentMethod())
                .status(PaymentStatus.COMPLETED) // Simulação de sucesso imediato
                .transactionId(UUID.randomUUID().toString())
                .build();

        Payment savedPayment = paymentRepository.save(payment);
        log.info("Pagamento processado com sucesso. ID Transação: {}", savedPayment.getTransactionId());

        // Publicar evento no Kafka
        kafkaTemplate.send("order-events", "Pagamento concluído para o pedido: " + savedPayment.getOrderId());

        return mapToDto(savedPayment);
    }

    @Override
    public PaymentDto getPaymentByOrderId(Long orderId) {
        Payment payment = paymentRepository.findByOrderId(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Pagamento não encontrado para o pedido: " + orderId));
        return mapToDto(payment);
    }

    private PaymentDto mapToDto(Payment payment) {
        return PaymentDto.builder()
                .id(payment.getId())
                .orderId(payment.getOrderId())
                .amount(payment.getAmount())
                .paymentMethod(payment.getPaymentMethod())
                .status(payment.getStatus())
                .transactionId(payment.getTransactionId())
                .createdAt(payment.getCreatedAt())
                .build();
    }
}
