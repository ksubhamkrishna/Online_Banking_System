package com.banking.UserSecurity.services.impl;

import com.banking.UserSecurity.repository.AccountDetailsRepository;

public class AccountDetailsServiceImpl {

    private AccountDetailsRepository accountDetailsRepository;

    public AccountDetailsServiceImpl accountDetailsServiceImpl(AccountDetailsRepository accountDetailsRepository){

        this.accountDetailsRepository = accountDetailsRepository;
    }



}
