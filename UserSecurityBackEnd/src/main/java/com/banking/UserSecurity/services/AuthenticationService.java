package com.banking.UserSecurity.services;

import com.banking.UserSecurity.dto.JwtAuthenticationResponse;
import com.banking.UserSecurity.dto.SignUpRequest;
import com.banking.UserSecurity.dto.SigninRequest;

public interface AuthenticationService {

    void signup(SignUpRequest signUpRequest);

    JwtAuthenticationResponse signin(SigninRequest signinRequest);

}
