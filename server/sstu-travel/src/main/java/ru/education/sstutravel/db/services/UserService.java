package ru.education.sstutravel.db.services;

import org.json.JSONObject;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import ru.education.sstutravel.db.entities.Tour;
import ru.education.sstutravel.db.entities.User;
import ru.education.sstutravel.db.repos.UserRepo;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public Optional<User> findByUsername(String username) {
        User user = userRepo.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
        return Optional.of(user);
    }
    public Boolean existsByUsername(String username){
        return userRepo.existsByUsername(username);
    }
    public Boolean existsByEmail(String email){
        return userRepo.existsByEmail(email);
    }

    public User create(User user){

        return userRepo.save(user);
    }

    public List<User> readAll(){
        return userRepo.findAll();
    }

    /*
    public User update(User userFromDb, User user) {
        //user.setPassword(userFromDb.getPassword());
        BeanUtils.copyProperties(user, userFromDb, "id","password", "authorities", "tours");
        return userRepo.save(userFromDb);
    }
    */
    public void update(Long id, String requestBody){
        User userFromDb = userRepo.getById(id);

        JSONObject requestData = new JSONObject(requestBody);

        String newUsername = requestData.getString("username");

        // проверка нового значения username
        if (!userFromDb.getUsername().equals(newUsername) && userRepo.existsByUsername(newUsername)) {
            throw new IllegalArgumentException("Username already exists");
        }

        User user = new User(
                requestData.getString("name"),
                requestData.getString("surname"),
                requestData.getString("middle_name"),
                requestData.getString("userpic"),
                requestData.getString("email"),
                newUsername //новое значение username
        );

        BeanUtils.copyProperties(user, userFromDb, "id","password", "authorities", "tours");

        userRepo.save(userFromDb);
    }

    //public void insertRoleStatus(Long user_id, Long role_id){
    //    userRepo.insertRoleStatus(user_id,role_id);
    //}

    public User getById(Long id){
        return userRepo.getById(id);
    }



}
