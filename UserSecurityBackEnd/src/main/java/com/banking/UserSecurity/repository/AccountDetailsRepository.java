package com.banking.UserSecurity.repository;

import com.banking.UserSecurity.entities.AccountDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public class AccountDetailsRepository extends JpaRepository<AccountDetails,Long> {

}
