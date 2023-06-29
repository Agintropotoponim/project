package ru.education.sstutravel.pojo;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BuyingRequest {
    private Long user_id;
    private Long tour_id;
}
