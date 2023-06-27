package ru.education.sstutravel.db.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.education.sstutravel.db.entities.User;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}
