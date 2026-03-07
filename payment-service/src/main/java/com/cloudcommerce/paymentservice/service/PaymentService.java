package com.cloudcommerce.paymentservice.service;

import com.cloudcommerce.paymentservice.dto.PaymentDto;

public interface PaymentService {
    PaymentDto processPayment(PaymentDto paymentDto);
    PaymentDto getPaymentByOrderId(Long orderId);
}
