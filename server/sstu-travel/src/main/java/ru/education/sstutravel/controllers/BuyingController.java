package ru.education.sstutravel.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.education.sstutravel.db.entities.Buying;
import ru.education.sstutravel.db.entities.Tour;
import ru.education.sstutravel.db.services.BuyingService;
import ru.education.sstutravel.pojo.BuyingRequest;

import java.util.List;

@RestController
@RequestMapping("/api/buying")
@CrossOrigin(origins = "*")
public class BuyingController {

    @Autowired
    BuyingService buyingService;

    @GetMapping
    public List<Buying> readAll(){
        return buyingService.readAll();
    }

    @GetMapping("{id}")
    public Buying readOne(@PathVariable("id") Long id){
        return buyingService.readOne(id);
    }

    @GetMapping("/my/{id}")
    public List<Tour> myTours(@PathVariable("id") Long id){
        return buyingService.getUserTours(id);
    }

    @PostMapping("/check")
    public String check(@RequestBody Buying buying){
        System.out.println("work");
        System.out.println(buyingService.checkBuys(buying));
        return buyingService.checkBuys(buying).toString();
    }

    @PostMapping
    public void create(@RequestBody Buying buying){
        buyingService.create(buying);
    }


}
