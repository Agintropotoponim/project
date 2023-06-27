package ru.education.sstutravel.db.entities;


import lombok.*;
import ru.education.sstutravel.db.models.EAuthority;
import javax.persistence.*;

@Entity
@Table(name = "Authority")
@ToString(of = {"id"})
@EqualsAndHashCode(of = {"id"})
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Authority {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private EAuthority name;

    public Authority(EAuthority name) {
        this.name = name;
    }
}
