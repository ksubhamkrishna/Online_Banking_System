package com.banking.UserSecurity.repository;

import com.banking.UserSecurity.entities.AccountDetails;
import com.banking.UserSecurity.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountDetailsRepository extends JpaRepository<AccountDetails,Long> {

    Optional<AccountDetails> findByEmail(String email);

}
