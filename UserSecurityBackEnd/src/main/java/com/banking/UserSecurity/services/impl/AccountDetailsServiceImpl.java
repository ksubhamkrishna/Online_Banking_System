package com.banking.UserSecurity.services.impl;

import com.banking.UserSecurity.dto.AccountDto;
import com.banking.UserSecurity.entities.AccountDetails;
import com.banking.UserSecurity.repository.AccountDetailsRepository;
import com.banking.UserSecurity.services.AccountDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountDetailsServiceImpl implements AccountDetailsService {

    private AccountDetailsRepository accountDetailsRepository;

@Autowired
    public AccountDetailsServiceImpl(AccountDetailsRepository accountDetailsRepository){

        this.accountDetailsRepository = accountDetailsRepository;
    }

    @Override
   public Optional<AccountDetails> findUserByEmailService(String email){

        Optional<AccountDetails> accountDetails = accountDetailsRepository.findByEmail(email);

        if(accountDetails.isPresent()){
            return accountDetails;
        }

        else{
            throw new RuntimeException("Account Doesn't Exist");
        }

    }

    @Override
    public void saveBankDetailsService(AccountDto accountDto) {

        AccountDetails accountDetails = new AccountDetails();
        accountDetails.setEmail(accountDto.getEmail());
        accountDetails.setAccountNumber(accountDto.getAccountNumber());
        accountDetails.setIfscCode(accountDto.getIfscCode());

        accountDetailsRepository.save(accountDetails);
    }


}
