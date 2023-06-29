package ru.education.sstutravel.db.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.hibernate.annotations.Formula;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "Tour")
@EqualsAndHashCode(of = {"id"})
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Tour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    @ManyToOne
    @JoinColumn(name = "employee")
    @JsonIgnoreProperties("tours")
    private Employee employee;
    private String cover;
    private BigDecimal price;
    private String start_date;

    public Tour(
        String name,
        String description,
        Employee employee,
        String cover,
        BigDecimal price,
        String start_date
    ){
        this.name = name;
        this.description = description;
        this.employee = employee;
        this.cover = cover;
        this.price = price;
        this.start_date = start_date;
    }

    public Tour(
            String name,
            String description,
            String cover,
            BigDecimal price,
            String start_date
    ){
        this.name = name;
        this.description = description;
        this.cover = cover;
        this.price = price;
        this.start_date = start_date;
    }
}
