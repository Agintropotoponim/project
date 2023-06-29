package ru.education.sstutravel.db.services;



import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import ru.education.sstutravel.db.entities.Employee;
import ru.education.sstutravel.db.entities.Tour;
import ru.education.sstutravel.db.repos.TourRepo;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class TourService {

    @Autowired
    private TourRepo tourRepo;
    @Autowired
    private EmployeeService employeeService;

    public List<Tour> readAll(){
        return tourRepo.findAll();
    }

    public Tour create(Tour tour){
        return tourRepo.save(tour);
    }

    public Tour update(Tour tourFromDb, Tour tour) {
        BeanUtils.copyProperties(tour, tourFromDb, "id");
        return tourRepo.save(tourFromDb);
    }

    public void updateTourForEmp(Long tour_id, Long emp_id){
        tourRepo.updateTourForEmp(tour_id,emp_id);
    }

    public void delete(Tour tour){
        tourRepo.delete(tour);
    }

}
