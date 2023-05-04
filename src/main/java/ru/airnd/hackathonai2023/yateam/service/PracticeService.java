package ru.airnd.hackathonai2023.yateam.service;

import ru.airnd.hackathonai2023.yateam.dto.CommentDTO;
import ru.airnd.hackathonai2023.yateam.dto.CreateCommentDTO;
import ru.airnd.hackathonai2023.yateam.dto.DetailedPracticeDTO;
import ru.airnd.hackathonai2023.yateam.dto.PracticeDTO;

import java.util.List;

public interface PracticeService {
    List<PracticeDTO> getAllPractices();

    DetailedPracticeDTO getPracticeById(Integer practiceId);

}
