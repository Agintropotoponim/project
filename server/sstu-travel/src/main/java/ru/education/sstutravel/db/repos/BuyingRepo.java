package ru.education.sstutravel.db.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ru.education.sstutravel.db.entities.Buying;
import ru.education.sstutravel.db.entities.Tour;

import java.util.List;

@Repository
public interface BuyingRepo extends JpaRepository<Buying, Long> {


    @Query("SELECT count(b.id) FROM Buying b where b.user_id = ?1 and b.tour_id = ?2 ")
    Long countBuys(Long user_id, Long tour_id);

    @Query("SELECT t from Tour t join Buying b on t.id = b.tour_id where b.user_id = ?1")
    List<Tour> getUserTours(Long user_id);
}
