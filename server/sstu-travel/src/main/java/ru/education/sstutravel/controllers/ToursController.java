package ru.education.sstutravel.controllers;


import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.education.sstutravel.db.dto.TourDto;
import ru.education.sstutravel.db.entities.Tour;
import ru.education.sstutravel.db.repos.TourRepo;
import ru.education.sstutravel.db.services.TourService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("tours")
@CrossOrigin(origins = "http://localhost:3000")
public class ToursController {

    private final TourService tourServ;

    @Autowired
    public ToursController(TourService tourServ) {
        this.tourServ = tourServ;
    }

    @GetMapping
    public List<TourDto> readAll(){
        return tourServ.readAllDto();
    }





    @PostMapping
    public Tour create(@RequestBody Tour tour){
        return tourServ.create(tour);
    }

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

























