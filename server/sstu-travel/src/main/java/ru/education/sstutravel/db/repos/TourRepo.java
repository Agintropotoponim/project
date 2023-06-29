package ru.education.sstutravel.db.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ru.education.sstutravel.db.entities.Tour;

import java.util.List;

@Repository
public interface TourRepo extends JpaRepository<Tour,Long> {
    //@Query("select (e.name + ' ' + e.surname) from Employee e where e.id = ?1")
    //String getLeaderName(Long id);

    //@Query("select e.name from Tour e")
    //List<Tour> toursByUserId(Long id);

    @Query("UPDATE Tour t set t.employee = ?2 where t.id = ?1")
    void updateTourForEmp(Long tour_id, Long emp_id);


}
