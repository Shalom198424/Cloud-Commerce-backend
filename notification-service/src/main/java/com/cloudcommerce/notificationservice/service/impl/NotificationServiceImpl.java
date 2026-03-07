package com.cloudcommerce.notificationservice.service.impl;

import com.cloudcommerce.common.exception.ResourceNotFoundException;
import com.cloudcommerce.notificationservice.dto.NotificationDto;
import com.cloudcommerce.notificationservice.model.Notification;
import com.cloudcommerce.notificationservice.repository.NotificationRepository;
import com.cloudcommerce.notificationservice.service.NotificationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class NotificationServiceImpl implements NotificationService {

    private final NotificationRepository notificationRepository;

    @Override
    @Transactional
    public NotificationDto createNotification(NotificationDto notificationDto) {
        log.info("Criando notificação para o usuário: {}", notificationDto.getUserId());
        
        Notification notification = Notification.builder()
                .userId(notificationDto.getUserId())
                .message(notificationDto.getMessage())
                .type(notificationDto.getType())
                .readStatus(false)
                .build();

        Notification savedNotification = notificationRepository.save(notification);
        return mapToDto(savedNotification);
    }

    @Override
    public List<NotificationDto> getNotificationsByUserId(Long userId) {
        return notificationRepository.findByUserIdOrderByCreatedAtDesc(userId)
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public void markAsRead(Long id) {
        Notification notification = notificationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Notificação não encontrada com ID: " + id));
        notification.setReadStatus(true);
        notificationRepository.save(notification);
    }

    private NotificationDto mapToDto(Notification notification) {
        return NotificationDto.builder()
                .id(notification.getId())
                .userId(notification.getUserId())
                .message(notification.getMessage())
                .type(notification.getType())
                .readStatus(notification.isReadStatus())
                .createdAt(notification.getCreatedAt())
                .build();
    }
}
