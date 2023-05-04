package ru.airnd.hackathonai2023.yateam.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import ru.airnd.hackathonai2023.yateam.dto.PracticeDto;
import ru.airnd.hackathonai2023.yateam.service.PracticeService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/practices")
public class PracticeController {

    private final PracticeService practiceService;

    // GET /api/practices
    @GetMapping
    public List<PracticeDto> getAllPractices() {
        return practiceService.getAllPractices();
    }

    // GET /api/practices/{id}
    @GetMapping("/{id}")
    public PracticeDto getPracticeById(@PathVariable Long id) {
        return practiceService.getPracticeById(id);
    }

    // POST /api/practices
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public PracticeDto createPractice(@RequestBody PracticeDto practice) {
        return practiceService.createPractice(practice);
    }

    // PUT /api/practices/{id}
    @PutMapping("/{id}")
    public PracticeDto updatePractice(@PathVariable Long id, @RequestBody PracticeDto practice) {
        return practiceService.updatePractice(id, practice);
    }

    // DELETE /api/practices/{id}
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePractice(@PathVariable Long id) {
        practiceService.deletePractice(id);
    }
}
