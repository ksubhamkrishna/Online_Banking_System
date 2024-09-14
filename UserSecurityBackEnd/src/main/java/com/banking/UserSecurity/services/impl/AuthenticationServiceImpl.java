package com.banking.UserSecurity.services.impl;

import com.banking.UserSecurity.dto.JwtAuthenticationResponse;
import com.banking.UserSecurity.dto.SignUpRequest;
import com.banking.UserSecurity.dto.SigninRequest;
import com.banking.UserSecurity.entities.Role;
import com.banking.UserSecurity.entities.User;
import com.banking.UserSecurity.repository.UserRepository;
import com.banking.UserSecurity.services.AuthenticationService;
import com.banking.UserSecurity.services.JWTService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    private final JWTService jwtService;

    @Override
    public void signup(SignUpRequest signUpRequest) {
        if (userRepository.findByEmail(signUpRequest.getEmail()).isPresent()) {
            throw new IllegalArgumentException("User with this email already exists");
        }

        User user = new User();
        Role role = "admin".equalsIgnoreCase(signUpRequest.getUserType()) ? Role.ADMIN : Role.USER;

        user.setEmail(signUpRequest.getEmail());
        user.setFirstname(signUpRequest.getFirstName());
        user.setSecondname(signUpRequest.getLastName());
        user.setRole(role);
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
        user.setAadhar(signUpRequest.getAadharNumber());
        user.setPan(signUpRequest.getPanNumber());

        userRepository.save(user);
    }

    public JwtAuthenticationResponse signin(SigninRequest signinRequest){

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signinRequest.getEmail(), signinRequest.getPassword()));

        var user = userRepository.findByEmail((signinRequest.getEmail())).orElseThrow(() -> new IllegalArgumentException("Invalid email or password."));

        var jwt = jwtService.generateToken(user);

        var refreshToken = jwtService.generateRefreshToken(new HashMap<>(), user);

        JwtAuthenticationResponse jwtAuthenticationResponse = new JwtAuthenticationResponse();

        jwtAuthenticationResponse.setToken(jwt);
        jwtAuthenticationResponse.setRefreshToken(refreshToken);

        return jwtAuthenticationResponse;



    }
}
