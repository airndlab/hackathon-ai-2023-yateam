package ru.airnd.hackathonai2023.yateam.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PracticeDto {

    private Long id;
    private String name;
    private String description;
    private String category;
    private String imageUrl;
    private String author;
    private int rating;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;

}
