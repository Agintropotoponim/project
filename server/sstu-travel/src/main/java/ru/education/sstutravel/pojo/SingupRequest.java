package ru.education.sstutravel.pojo;

import lombok.Data;

import java.util.Set;


@Data
public class SingupRequest {
    private String username;
    private String email;
    private String password;
    private Set<String> roles;



}
