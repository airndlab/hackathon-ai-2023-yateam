package ru.airnd.hackathonai2023.yateam.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.airnd.hackathonai2023.yateam.dto.CategoryDTO;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {

    @GetMapping
    public ResponseEntity<List<CategoryDTO>> getAll() {
        return ResponseEntity.ok(List.of(
                CategoryDTO.builder().id(1L).name("Аналитика").build(),
                CategoryDTO.builder().id(2L).name("Разработка").build(),
                CategoryDTO.builder().id(3L).name("Тестирование").build(),
                CategoryDTO.builder().id(4L).name("DevOps").build(),
                CategoryDTO.builder().id(5L).name("Документирование").build()
        ));
    }

}
