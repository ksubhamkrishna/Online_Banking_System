package com.banking.UserSecurity.services;

import com.banking.UserSecurity.entities.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Optional;

public interface UserService {

    UserDetailsService userDetailsService();

    Optional<User> findUserByEmail(String email);
}
