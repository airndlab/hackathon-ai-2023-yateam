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
    public static final List<PracticeDTO> PRACTICES = List.of(
            PracticeDTO.builder().id(1).author("asdgaefg").categoryId(1L).name("dzfbh").rating(1.0).votes(3).build(),
            PracticeDTO.builder().id(2).author("sdfgebh").categoryId(2L).name("szdfagv").rating(2.0).votes(3).build(),
            PracticeDTO.builder().id(3).author("fghjthg").categoryId(3L).name("sdf").rating(3.0).votes(343).build(),
            PracticeDTO.builder().id(4).author("gfhk").categoryId(4L).name("ads").rating(4.0).votes(32).build(),
            PracticeDTO.builder().id(5).author("jlk,y").categoryId(5L).name("dfghn").rating(5.0).votes(323).build(),
            PracticeDTO.builder().id(6).author("q   awes").categoryId(1L).name("fghjn").rating(1.0).votes(300).build(),
            PracticeDTO.builder().id(7).author("hjk,.h").categoryId(2L).name("fgjhn").rating(2.0).votes(30).build(),
            PracticeDTO.builder().id(8).author("dghn").categoryId(3L).name("fhjm").rating(3.0).votes(4).build(),
            PracticeDTO.builder().id(9).author("swde").categoryId(4L).name("asdf").rating(4.0).votes(3).build(),
            PracticeDTO.builder().id(10).author("fghj").categoryId(5L).name("fhfjk").rating(5.0).votes(3).build(),
            PracticeDTO.builder().id(11).author("gthkmj").categoryId(1L).name("sdfagv").rating(1.0).votes(3).build()
    );

//    private final PracticeService practiceService;
//    private final RatingService ratingService;
//    private final CommentService commentService;

    @GetMapping
//    @Operation(summary = "Получить список всех практик")
    public ResponseEntity<List<PracticeDTO>> getAllPractices() {
        return ResponseEntity.ok(PRACTICES);
    }

    @GetMapping("/{practiceId}")
//    @Operation(summary = "Получить информацию о практике")
    public ResponseEntity<DetailedPracticeDTO> getPracticeById(
            @PathVariable Integer practiceId
    ) {
        return ResponseEntity.ok(
                PRACTICES.stream().filter(p -> p.getId().equals(practiceId)).findFirst()
                        .map(p -> DetailedPracticeDTO.builder()
                                .link("http://localhost")
                                .categoryId(p.getCategoryId())
                                .id(p.getId())
                                .name(p.getName())
                                .author(p.getAuthor())
                                .description("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
                                .votes(p.getVotes())
                                .rating(p.getRating())
                                .build())
                        .orElse(null));
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
        return ResponseEntity.ok(List.of(
                CommentDTO.builder().comment("zsdfgvsdef sfdgadesfg sdfcbv").id(1).username("user1").build(),
                CommentDTO.builder().comment("sadfgefd asdg asdf").id(2).username("user2").build(),
                CommentDTO.builder().comment("sdfgs asdf sadfasвыв фывфыв").id(3).username("user1").build(),
                CommentDTO.builder().comment("фывапцы фываыфва ыфв").id(4).username("user2").build(),
                CommentDTO.builder().comment("sadf sadf asdfd").id(5).username("user1").build()
        ));
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
