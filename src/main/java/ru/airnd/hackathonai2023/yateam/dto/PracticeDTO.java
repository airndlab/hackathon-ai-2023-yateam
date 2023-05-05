package ru.airnd.hackathonai2023.yateam.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PracticeDTO {
    private Integer id;
    private String category;
    private String name;
    private String author;
    private Double rating;
    private Integer votes;
}
