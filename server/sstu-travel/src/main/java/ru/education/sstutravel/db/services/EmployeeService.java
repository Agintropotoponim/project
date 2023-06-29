package ru.education.sstutravel.db.services;


import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.education.sstutravel.Util;

import ru.education.sstutravel.db.entities.Employee;
import ru.education.sstutravel.db.entities.Tour;
import ru.education.sstutravel.db.repos.EmployeeRepo;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class EmployeeService {

    @Autowired
    private EmployeeRepo empRepo;

    public List<Employee> readAll(){
        return empRepo.findAll();
    }



    public Employee getById(Long id){
        return empRepo.getById(id);
    }

    public long getCount(){
        return empRepo.count();
    }
    public Employee create(Employee emp){
        return empRepo.save(emp);
    }

    public Employee update(Employee empFromDb, Employee emp) {
        BeanUtils.copyProperties(emp, empFromDb, "id");
        return empRepo.save(empFromDb);
    }



    public void delete(Employee emp){
        empRepo.delete(emp);
    }

}
