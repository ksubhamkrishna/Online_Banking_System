package com.banking.UserSecurity.controller;

import com.banking.UserSecurity.ApiResponse;
import com.banking.UserSecurity.dto.AccountDto;
import com.banking.UserSecurity.dto.JwtAuthenticationResponse;
import com.banking.UserSecurity.dto.SignUpRequest;
import com.banking.UserSecurity.dto.SigninRequest;
import com.banking.UserSecurity.entities.AccountDetails;
import com.banking.UserSecurity.entities.User;
import com.banking.UserSecurity.services.AccountDetailsService;
import com.banking.UserSecurity.services.AuthenticationService;
import com.banking.UserSecurity.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    private final UserService userService;

    private final AccountDetailsService accountDetailsService;

    @Autowired
    public AuthenticationController(UserService userService, AuthenticationService authenticationService, AccountDetailsService accountDetailsService){
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.accountDetailsService = accountDetailsService;

    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignUpRequest signUpRequest) {
        try {

            System.out.println(signUpRequest.getAadharNumber());
            System.out.println(signUpRequest.getEmail());
            System.out.println(signUpRequest.getPanNumber());
            authenticationService.signup(signUpRequest);
            return ResponseEntity.ok(new ApiResponse("User registered successfully"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
        }
    }

    @PostMapping("/signin")
    public ResponseEntity<JwtAuthenticationResponse> signin(@RequestBody SigninRequest signinRequest) {
        return ResponseEntity.ok(authenticationService.signin(signinRequest));
    }

    @GetMapping("/user/{email}")
    public Optional<User> getUserById(@PathVariable String email) {
        return userService.findUserByEmail(email);
    }

    @GetMapping("/account_details/{email}")
    public Optional<AccountDetails> accountDetailsByEmail(@PathVariable String email){

        Optional<AccountDetails> accountDetails = accountDetailsService.findUserByEmailService(email);

        if(accountDetails.isPresent()) {
            return accountDetails;
        }
        else{
            throw new Shubam("Account is not Found");
        }

    }

    @PostMapping("/save_account_details")
    public ResponseEntity<?> accountDetailsCreating(@RequestBody AccountDto accountDto){

        accountDetailsService.saveBankDetailsService(accountDto);

        return ResponseEntity.ok(new ApiResponse("Bank Details Entered successfully"));

    }
}
