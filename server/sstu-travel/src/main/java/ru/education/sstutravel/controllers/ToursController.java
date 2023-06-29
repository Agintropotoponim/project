package ru.education.sstutravel.controllers;


import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.education.sstutravel.db.entities.Employee;
import ru.education.sstutravel.db.entities.Tour;
import ru.education.sstutravel.db.services.EmployeeService;
import ru.education.sstutravel.db.services.TourService;

import java.util.Date;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

@RestController
@RequestMapping("/tours")
@CrossOrigin(origins = "*")

public class ToursController {

    @Autowired
    private  EmployeeService employeeService;
    @Autowired
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
        System.out.println("aaaaaaaa");
        return tour;
    }

    @PostMapping
    public Tour create(@RequestBody Tour tour){
        return tourServ.create(tour);
    }

    @PostMapping("/panel")
    public void createTour(@RequestBody String requestBody) {
        JSONObject requestData = new JSONObject(requestBody);

        //Employee emp = employeeService.getByUserId((requestData.getLong("usr")));

        Long emp_id = employeeService.getIdByUsrId((requestData.getLong("usr")));




        Tour t = tourServ.create(new Tour(
                requestData.getString("name"),
                requestData.getString("description"),

                requestData.getString("cover"),
                requestData.getBigDecimal("price"),
                requestData.getString("start_date")
        ));

        //tourServ.updateTourForEmp(t.getId(),emp_id);
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

























