package com.banking.UserSecurity.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "account_details")
public class AccountDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "account_number")
    private String accountNumber;

    @Column(name = "email")
    private String email;

    @Column(name = "ifsc_code")
    private String ifscCode;
}
