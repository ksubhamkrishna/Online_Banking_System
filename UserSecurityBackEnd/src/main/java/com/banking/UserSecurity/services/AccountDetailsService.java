package com.banking.UserSecurity.services;

import com.banking.UserSecurity.dto.AccountDto;
import com.banking.UserSecurity.entities.AccountDetails;

import java.util.Optional;

public interface AccountDetailsService {

Optional<AccountDetails> findUserByEmailService(String email);

void saveBankDetailsService(AccountDto accountDto);

}
