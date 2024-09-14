package com.banking.UserSecurity.services.impl;


import com.banking.UserSecurity.entities.User;
import com.banking.UserSecurity.repository.UserRepository;
import com.banking.UserSecurity.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {


    private final UserRepository userRepository;

    public UserDetailsService userDetailsService(){
        return new UserDetailsService() {
            public UserDetails loadUserByUsername(String username){
                return userRepository.findByEmail(username)
                        .orElseThrow(() -> new UsernameNotFoundException("User not found"));
            }
        };
    }

    public Optional<User> findUserByEmail(String email) throws RuntimeException{

        Optional<User> user = userRepository.findByEmail(email);

        if(user.isPresent()){
        return user;
        }
        else{
            throw new RuntimeException("User id not present");
        }
    }
}
