package ru.airnd.hackathonai2023.yateam.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DetailedPracticeDTO {
    private Integer id;
    private Integer categoryId;
    private String author;
    private String name;
    private String markdown;
    private Double rating;
    private Integer votes;
    private Integer myRating;
}
