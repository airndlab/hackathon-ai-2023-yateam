package ru.airnd.hackathonai2023.yateam.service;

import ru.airnd.hackathonai2023.yateam.dto.PracticeDto;

import java.util.List;

public interface PracticeService {
    List<PracticeDto> getAllPractices();

    PracticeDto getPracticeById(Long id);

    PracticeDto createPractice(PracticeDto practice);

    PracticeDto updatePractice(Long id, PracticeDto practice);

    void deletePractice(Long id);
}
