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
public class CommentDTO {
    private Integer id;
    private Integer authorId;
    private String authorName;
    private String text;
    private LocalDateTime dateCreated;
}
