package ru.education.sstutravel.db.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ru.education.sstutravel.db.entities.User;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);

    //@Query("insert into users_authorities values(?1,?2)")
    //void insertRoleStatus(Long user_id, Long role_id);

    //@Query("select (e.name + ' ' + e.surname) from Employee e where e.id = ?1")
    //String getLeaderName(Long id);
}
