package ru.education.sstutravel.db.entities;


import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "Buying")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Buying {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long user_id;
    private Long tour_id;
}
