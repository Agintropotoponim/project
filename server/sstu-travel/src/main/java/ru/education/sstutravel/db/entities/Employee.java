package ru.education.sstutravel.db.entities;




import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "Employee")
@ToString(of = {"id", "name"})
@EqualsAndHashCode(of={"id"})
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Employee{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String surname;
    private String middleName;
    private String position;
    private String avatar;
    private String poster;
    private String username;
    private String password;
    @OneToMany(mappedBy = "employee")
    @JsonIgnoreProperties("employee")
    private List<Tour> tours = new ArrayList<>();




}
