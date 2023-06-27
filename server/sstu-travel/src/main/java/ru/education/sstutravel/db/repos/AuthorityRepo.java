package ru.education.sstutravel.db.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.education.sstutravel.db.entities.Authority;
import ru.education.sstutravel.db.models.EAuthority;

import java.util.Optional;

@Repository
public interface AuthorityRepo extends JpaRepository<Authority, Long> {
    Optional<Authority> findByName(EAuthority name);
}
