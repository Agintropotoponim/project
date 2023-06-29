package ru.education.sstutravel.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;


@AllArgsConstructor
@Data
public class JwtResponse {

    private String token;
    private String type = "Bearer";
    private Long id;
    private String username;
    private String email;
    private String userpic;
    private String name;
    private String surname;
    private String middleName;
    private List<String> roles;
}
