package ru.education.sstutravel.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.education.sstutravel.db.entities.Authority;
import ru.education.sstutravel.db.models.EAuthority;
import ru.education.sstutravel.db.repos.AuthorityRepo;

@RestController
@RequestMapping("/api/test")
@CrossOrigin(origins = "*", maxAge = 3600)
public class TestController {

    @Autowired
    AuthorityRepo authorityRepo;

    @GetMapping("/test")
    public Authority test(){

        Authority userAuthority = authorityRepo
                .findByName(EAuthority.ROLE_EMPLOYEE)
                .orElseThrow(() -> new RuntimeException("Error, Role USER is not found"));

        return userAuthority;
    }
    @GetMapping("/all")
    public String allAccess() {
        return "public API";
    }

    @GetMapping("/user")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public String userAccess() {
        return "user API";
    }

    @GetMapping("/emp")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public String moderatorAccess() {
        return "moderator API";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminAccess() {
        return "admin API";
    }
}