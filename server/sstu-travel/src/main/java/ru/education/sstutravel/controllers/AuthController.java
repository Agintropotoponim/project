package ru.education.sstutravel.controllers;

import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import ru.education.sstutravel.config.jwt.JwtUtils;
import ru.education.sstutravel.db.entities.Authority;
import ru.education.sstutravel.db.entities.User;
import ru.education.sstutravel.db.models.EAuthority;
import ru.education.sstutravel.db.repos.AuthorityRepo;
import ru.education.sstutravel.db.repos.UserRepo;
import ru.education.sstutravel.db.services.UserDetailsImpl;
import ru.education.sstutravel.pojo.JwtResponse;
import ru.education.sstutravel.pojo.LoginRequest;
import ru.education.sstutravel.pojo.MessageResponse;
import ru.education.sstutravel.pojo.SingupRequest;

import javax.transaction.Transactional;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "localhost:3000/login", maxAge = 3600)
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepo userRepo;

    @Autowired
    AuthorityRepo authorityRepo;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> authUser(@RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(
                new JwtResponse(jwt,
                "Bearer",
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                userDetails.getUserpic(),
                userDetails.getName(),
                userDetails.getSurname(),
                userDetails.getMiddle_name(),
                roles
                ));
    }

    /*
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SingupRequest signupRequest) {

        if (userRepo.existsByUsername(signupRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is exist"));
        }

        if (userRepo.existsByEmail(signupRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is exist"));
        }

        User user = new User(signupRequest.getUsername(),
                signupRequest.getEmail(),
                passwordEncoder.encode(signupRequest.getPassword()));

System.out.println(signupRequest);
        Set<String> reqAuthorities = signupRequest.getRoles();
        Set<Authority> authorities = new HashSet<>();

        if (reqAuthorities == null) {
System.out.println("haaaaaaaaaaaaaa");
            Authority userAuthority = authorityRepo
                    .findByName(EAuthority.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error, Role USER is not found"));
            authorities.add(userAuthority);
        } else {
            reqAuthorities.forEach(r -> {
                switch (r) {
                    case "admin":
System.out.println("admin");
                        Authority adminRole = authorityRepo
                                .findByName(EAuthority.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error, Role ADMIN is not found"));
                        authorities.add(adminRole);

                        break;
                    case "emp":
System.out.println("emp");
                        Authority empAuth = authorityRepo
                                .findByName(EAuthority.ROLE_EMPLOYEE)
                                .orElseThrow(() -> new RuntimeException("Error, Role MODERATOR is not found"));
                        authorities.add(empAuth);
                        break;

                    default:
System.out.println("usr");
                        Authority userRole = authorityRepo
                                .findByName(EAuthority.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error, Role USER is not found"));
                        authorities.add(userRole);
                }
            });
        }
        user.setAuthorities(authorities);
        userRepo.save(user);
        return ResponseEntity.ok(new MessageResponse("User CREATED"));
    }

     */


    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SingupRequest signupRequest) {

        if (userRepo.existsByUsername(signupRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is exist"));
        }

        if (userRepo.existsByEmail(signupRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is exist"));
        }

        User user = new User(signupRequest.getUsername(),
                signupRequest.getEmail(),
                passwordEncoder.encode(signupRequest.getPassword()));

        Set<Authority> authorities = new HashSet<>();

        Authority userRole = authorityRepo
                .findByName(EAuthority.ROLE_USER)
                .orElseThrow(() -> new RuntimeException("Error, Role USER is not found"));
        authorities.add(userRole);

        user.setAuthorities(authorities);
        userRepo.save(user);
        return ResponseEntity.ok(new MessageResponse("User CREATED"));
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
