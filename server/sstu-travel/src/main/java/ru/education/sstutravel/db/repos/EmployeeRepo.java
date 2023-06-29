package ru.education.sstutravel.db.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ru.education.sstutravel.db.entities.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long> {

    //@Query("SELECT e from Employee e where e.usr = ?1")
    //Employee getByUserId(Long id);
    @Query("select e.id from Employee e where e.usr = ?1")
    Long getEmpByUsrId(Long id);
    Employee getEmployeeByUsr(Long usr);
}
