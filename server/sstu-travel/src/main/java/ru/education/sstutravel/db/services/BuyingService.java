package ru.education.sstutravel.db.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.education.sstutravel.db.entities.Buying;
import ru.education.sstutravel.db.entities.Tour;
import ru.education.sstutravel.db.repos.BuyingRepo;
import ru.education.sstutravel.pojo.BuyingRequest;

import java.util.List;

@Service
public class BuyingService {

    @Autowired
    BuyingRepo buyingRepo;

    public List<Buying> readAll(){
        return buyingRepo.findAll();
    }

    public Buying readOne(Long id){
        return buyingRepo.getOne(id);
    }

    public Boolean checkBuys(Buying buying){
        Long count = buyingRepo.countBuys(buying.getUser_id(), buying.getTour_id());
        System.out.println(count);
        if(count == 0) return true;
        else return false;
    }

    public void create(Buying buying){
        buyingRepo.save(buying);
    }

    public List<Tour> getUserTours(Long id){
        return buyingRepo.getUserTours(id);
    }

}
