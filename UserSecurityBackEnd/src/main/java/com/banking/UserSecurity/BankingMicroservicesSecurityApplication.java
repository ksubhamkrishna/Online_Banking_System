package com.banking.UserSecurity;

import com.banking.UserSecurity.entities.Role;
import com.banking.UserSecurity.entities.User;
import com.banking.UserSecurity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class BankingMicroservicesSecurityApplication  {

	public static void main(String[] args) {
		SpringApplication.run(BankingMicroservicesSecurityApplication.class, args);
	}
}
