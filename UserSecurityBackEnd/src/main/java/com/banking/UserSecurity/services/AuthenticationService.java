package com.banking.UserSecurity.services;

import com.banking.UserSecurity.dto.JwtAuthenticationResponse;
import com.banking.UserSecurity.dto.SignUpRequest;
import com.banking.UserSecurity.dto.SigninRequest;
import com.banking.UserSecurity.entities.User;

public interface AuthenticationService {

    User signup(SignUpRequest signUpRequest);

    JwtAuthenticationResponse signin(SigninRequest signinRequest);

}
