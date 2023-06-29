package ru.education.sstutravel.controllers;

import org.json.JSONObject;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.education.sstutravel.db.entities.Tour;
import ru.education.sstutravel.db.entities.User;
import ru.education.sstutravel.db.repos.UserRepo;
import ru.education.sstutravel.db.services.UserService;
import ru.education.sstutravel.pojo.PreSignupRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.net.http.HttpResponse;
import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("{id}")
    public User readOne(@PathVariable("id") Long id){
        return userService.getById(id);
    }


    @PostMapping("/existbyusername")
    public Boolean existByUsername(@RequestBody PreSignupRequest req){
        return userService.existsByUsername(req.getUsername());
    }
    @PostMapping("/existbyemail")
    public Boolean existByEmail(@RequestBody PreSignupRequest req) {
        return userService.existsByEmail(req.getEmail());
    }


/*
    @PutMapping("/update/{id}")
    public User update(
            @PathVariable("id") User userFromDb,
            @RequestBody User user
    ){
        return userService.u
                pdate(userFromDb, user);
    }
*/
    @PostMapping("/create")
    public User create(@RequestBody User user){
        return userService.create(user);
    }



    @PutMapping("{id}")
    public void updateProfile(
            @PathVariable("id") Long id,
            @RequestBody String requestBody
    ) {
        userService.update(id,requestBody);
    }

    //@PutMapping("/update/tours")
    //public void()



}


