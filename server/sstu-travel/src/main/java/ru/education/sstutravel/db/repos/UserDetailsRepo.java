package ru.education.sstutravel.db.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.education.sstutravel.db.entities.User;

public interface UserDetailsRepo extends JpaRepository<User,String> {
}
