package com.cloudcommerce.notificationservice.service;

import com.cloudcommerce.notificationservice.dto.NotificationDto;
import java.util.List;

public interface NotificationService {
    NotificationDto createNotification(NotificationDto notificationDto);
    List<NotificationDto> getNotificationsByUserId(Long userId);
    void markAsRead(Long id);
}
