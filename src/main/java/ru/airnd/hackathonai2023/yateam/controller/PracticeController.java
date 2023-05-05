package ru.airnd.hackathonai2023.yateam.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import ru.airnd.hackathonai2023.yateam.dto.CommentDTO;
import ru.airnd.hackathonai2023.yateam.dto.CreateCommentDTO;
import ru.airnd.hackathonai2023.yateam.dto.DetailedPracticeDTO;
import ru.airnd.hackathonai2023.yateam.dto.PracticeDTO;

import java.util.List;

@RestController
@RequestMapping("/api/practices")
//@Tag(name = "PracticeController", description = "Контроллер для работы с практиками")
@RequiredArgsConstructor
public class PracticeController {

//    private final PracticeService practiceService;
//    private final RatingService ratingService;
//    private final CommentService commentService;

    @GetMapping
//    @Operation(summary = "Получить список всех практик")
    public ResponseEntity<List<PracticeDTO>> getAllPractices() {
        return ResponseEntity.ok(List.of(
                PracticeDTO.builder().id(1).author("author1").category("Category1").name("name1").rating(1.0).votes(3)
                        .build()
        ));
    }

    @GetMapping("/{practiceId}")
//    @Operation(summary = "Получить информацию о практике")
    public ResponseEntity<DetailedPracticeDTO> getPracticeById(
            @PathVariable Integer practiceId
    ) {
        return ResponseEntity.ok(
                DetailedPracticeDTO.builder().author("author1").category("Category1").description("desc").votes(3)
                        .rating(1.0).link("http://localhost").build());
    }

    @PostMapping("/{practiceId}/ratings")
//    @Operation(summary = "Добавить оценку практике")
    public ResponseEntity<Void> addRating(
            @PathVariable Integer practiceId,
            @RequestParam Integer rating
    ) {
//        ratingService.addRating(practiceId, rating);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping("/{practiceId}/ratings")
//    @Operation(summary = "Отменить оценку практики")
    public ResponseEntity<Void> deleteRating(
            @PathVariable Integer practiceId
    ) {
//        ratingService.deleteRating(practiceId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping("/{practiceId}/comments")
//    @Operation(summary = "Получить список комментариев для практики")
    public ResponseEntity<List<CommentDTO>> getCommentsForPractice(
            @PathVariable Integer practiceId
    ) {
        return ResponseEntity.ok(List.of(CommentDTO.builder().comment("comment").id(1).username("username").build()));
    }

    @PostMapping("/{practiceId}/comments")
//    @Operation(summary = "Создать новый комментарий к практике")
    public ResponseEntity<Void> addCommentToPractice(
            @PathVariable Integer practiceId,
            @RequestBody @Validated CreateCommentDTO createCommentDTO
    ) {
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

}
