package ru.airnd.hackathonai2023.yateam.service;

import ru.airnd.hackathonai2023.yateam.dto.CommentDTO;
import ru.airnd.hackathonai2023.yateam.dto.CreateCommentDTO;

import java.util.List;

public interface CommentService {

    CommentDTO addCommentToPractice(Integer practiceId, CreateCommentDTO request);

    List<CommentDTO> getCommentsForPractice(Integer practiceId);

    void deleteComment(Integer commentId);

}
