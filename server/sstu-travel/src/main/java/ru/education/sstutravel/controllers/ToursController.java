package ru.education.sstutravel.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.education.sstutravel.db.entities.Tour;
import ru.education.sstutravel.db.services.TourService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/tours")
@CrossOrigin(origins = "*")

public class ToursController {

    private final TourService tourServ;

    @Autowired
    public ToursController(TourService tourServ) {
        this.tourServ = tourServ;
    }

    @GetMapping
    public List<Tour> readAll(){
        return tourServ.readAll();
    }

    @GetMapping("{id}")
    public Tour readOne(@PathVariable("id") Tour tour){
        return tour;
    }
    @PostMapping
    public Tour create(@RequestBody Tour tour){
        return tourServ.create(tour);
    }

    //@PostMapping
    //public Tour create(@RequestBody Tour tour){
        //return tourServ.create(tour);
    //}

    @PutMapping("{id}")
    public Tour update(
            @PathVariable("id") Tour tourFromDb,
            @RequestBody Tour tour
    ){
        return tourServ.update(tour, tourFromDb);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Tour tour){
        tourServ.delete(tour);
    }

}

























