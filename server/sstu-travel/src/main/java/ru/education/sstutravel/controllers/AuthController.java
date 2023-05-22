package ru.education.sstutravel.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.education.sstutravel.config.TokenAccess;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@RestController
public class AuthController {

    @GetMapping("/login")
    public String showLoginForm() {
        return "login";
    }

    @GetMapping("/oauth2/callback")
    public String oAuthCallback(@RequestParam String code, HttpServletResponse response) {

        TokenAccess tokenAccess = new TokenAccess();

        Cookie cookie = new Cookie("tokenAccess", tokenAccess.toString());
        cookie.setMaxAge(-1);

        //Cookie accessTokenCookie = new Cookie("access_token", accessToken);
        //accessTokenCookie.setMaxAge(-1);
        //accessTokenCookie.setPath("/");
        //response.addCookie(accessTokenCookie);
        return code;
    }
}