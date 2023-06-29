package ru.education.sstutravel.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import ru.education.sstutravel.db.entities.Employee;
import ru.education.sstutravel.db.entities.Tour;
import ru.education.sstutravel.db.repos.EmployeeRepo;
import ru.education.sstutravel.db.services.EmployeeService;

import java.util.List;

@RestController
@RequestMapping("/employees")
@CrossOrigin(origins = "*")
public class EmployeeController {

    private final EmployeeService empService;

    @Autowired
    public EmployeeController(EmployeeService empService) {
        this.empService = empService;
    }

    @GetMapping
    public List<Employee> readAll(){
        return empService.readAll();
    }

    @GetMapping(value = "/quantity")
    public long getCount(){
        return empService.getCount();
    }

    @GetMapping("{id}")
    public Employee readOne(@PathVariable("id") Employee emp){
        return emp;
    }

    @PostMapping
    public Employee create(@RequestBody Employee employee){
        return empService.create(employee);
    }

}
