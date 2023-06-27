package ru.education.sstutravel.db.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ru.education.sstutravel.db.entities.Tour;

import java.util.List;

public interface TourRepo extends JpaRepository<Tour,Long> {
    @Query("select (e.name + ' ' + e.surname) from Employee e where e.id = ?1")
    String getLeaderName(Long id);
}
