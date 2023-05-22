package ru.education.sstutravel.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @GetMapping("/user")
    public Principal user(Principal principal) {
        return principal;
    }
}
