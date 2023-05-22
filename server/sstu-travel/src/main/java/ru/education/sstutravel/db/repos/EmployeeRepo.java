package ru.education.sstutravel.db.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.education.sstutravel.db.entities.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long> {

}
