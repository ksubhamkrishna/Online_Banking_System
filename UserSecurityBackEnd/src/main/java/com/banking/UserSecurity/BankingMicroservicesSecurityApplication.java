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
public class BankingMicroservicesSecurityApplication implements CommandLineRunner {

	private UserRepository userRepository;

	@Autowired
	public BankingMicroservicesSecurityApplication(UserRepository userRepository) {
		this.userRepository = userRepository;
	}



	public static void main(String[] args) {
		SpringApplication.run(BankingMicroservicesSecurityApplication.class, args);
	}

	public void run(String...args){

		User adminAccount = userRepository.findByRole(Role.ADMIN);

		if(null == adminAccount){
			User user = new User();

			user.setEmail("admin@gmail.com");
			user.setFirstname("admin");
			user.setSecondname("admin");
			user.setRole(Role.ADMIN);
			user.setPassword(new BCryptPasswordEncoder().encode("admin"));
			userRepository.save(user);
		}
	}
}
