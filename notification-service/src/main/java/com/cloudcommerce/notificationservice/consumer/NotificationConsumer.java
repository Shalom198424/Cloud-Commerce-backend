package com.cloudcommerce.notificationservice.consumer;

import com.cloudcommerce.notificationservice.dto.NotificationDto;
import com.cloudcommerce.notificationservice.service.NotificationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class NotificationConsumer {

    private final NotificationService notificationService;

    @KafkaListener(topics = "order-events", groupId = "notification-group")
    public void consumeOrderEvent(String message) {
        log.info("Evento de pedido recebido: {}", message);
        
        // Exemplo simples: assume que a mensagem contém informações suficientes para gerar uma notificação
        // Em um cenário real, converteríamos o JSON da mensagem para um DTO de evento
        NotificationDto notification = NotificationDto.builder()
                .userId(1L) // Simulado: extrair do evento
                .message("Seu pedido foi processado: " + message)
                .type("ORDER")
                .build();

        notificationService.createNotification(notification);
    }
}
