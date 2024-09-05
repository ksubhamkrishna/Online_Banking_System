package com.banking.UserSecurity.controller;

import com.banking.UserSecurity.dto.JwtAuthenticationResponse;
import com.banking.UserSecurity.dto.SignUpRequest;
import com.banking.UserSecurity.dto.SigninRequest;
import com.banking.UserSecurity.entities.User;
import com.banking.UserSecurity.services.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/signup")
    public ResponseEntity<User> signup(@RequestBody SignUpRequest signUpRequest){

        return ResponseEntity.ok(authenticationService.signup(signUpRequest));


    }

    @PostMapping("/signin")
    public ResponseEntity<JwtAuthenticationResponse> signin(@RequestBody SigninRequest signinRequest){
        return ResponseEntity.ok(authenticationService.signin(signinRequest));
    }
}
