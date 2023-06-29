package ru.education.sstutravel.controllers;

import org.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import ru.education.sstutravel.db.entities.User;

import ru.education.sstutravel.db.services.UserService;
import ru.education.sstutravel.pojo.PreSignupRequest;

import java.util.List;


@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService userService;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public List<User> readAll(){
        return userService.readAll();
    }

    @PreAuthorize("hasRole('USER')")
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
    @PostMapping("/insert/authorities")
    public void insertAuth(@RequestBody String requestBody){
        JSONObject requestData = new JSONObject(requestBody);

        userService.insertRoleStatus(
                requestData.getLong("user_id"),
                requestData.getLong("role_id")
        );

    }

     */


/*
    @PutMapping("/update/{id}")
    public User update(
            @PathVariable("id") User userFromDb,
            @RequestBody User user
    ){
        return userService.update(userFromDb, user);
    }
*/

    @PreAuthorize("hasRole('USER') or hasRole('EMPLOYEE') or hasRole('ADMIN')")
    @PutMapping("{id}")
    public void updateProfile(
            @PathVariable("id") Long id,
            @RequestBody String requestBody
    ) {
        userService.update(id,requestBody);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create")
    public User create(@RequestBody User user){
        return userService.create(user);
    }







}


