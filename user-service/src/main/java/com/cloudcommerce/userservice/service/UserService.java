package com.cloudcommerce.userservice.service;

import com.cloudcommerce.userservice.dto.AuthResponse;
import com.cloudcommerce.userservice.dto.LoginRequest;
import com.cloudcommerce.userservice.dto.RegisterRequest;
import com.cloudcommerce.userservice.dto.UserDto;

public interface UserService {
    UserDto register(RegisterRequest request);

    AuthResponse login(LoginRequest request);

    UserDto getUserProfile(String email);
}
