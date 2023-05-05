package ru.airnd.hackathonai2023.yateam.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/comments")
//@Tag(name = "CommentController", description = "Контроллер для работы с комментариями")
@RequiredArgsConstructor
public class CommentController {

//    private final CommentService commentService;

    @DeleteMapping("/{commentId}")
//    @Operation(summary = "Удаление комментария")
    public ResponseEntity<Void> deleteComment(@PathVariable Integer commentId) {
//        commentService.deleteComment(commentId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
