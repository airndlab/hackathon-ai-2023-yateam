package ru.airnd.hackathonai2023.yateam.service;

import lombok.RequiredArgsConstructor;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import ru.airnd.hackathonai2023.yateam.dto.CommentDTO;
import ru.airnd.hackathonai2023.yateam.dto.CreateCommentDTO;
import ru.airnd.hackathonai2023.yateam.entity.Comment;
import ru.airnd.hackathonai2023.yateam.entity.Practice;
import ru.airnd.hackathonai2023.yateam.entity.User;
import ru.airnd.hackathonai2023.yateam.repository.CommentRepository;
import ru.airnd.hackathonai2023.yateam.repository.PracticeRepository;
import ru.airnd.hackathonai2023.yateam.repository.UserRepository;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {
    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final PracticeRepository practiceRepository;
    private final Converter<Comment, CommentDTO> commentConverter;

    @Override
    public CommentDTO addCommentToPractice(Integer practiceId, CreateCommentDTO request) {
        Practice practice = practiceRepository.findById(practiceId)
                .orElseThrow(() -> new EntityNotFoundException("Practice not found with id: " + practiceId));
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found with username: " + username));
        Comment comment = Comment.builder()
                .practice(practice)
                .user(user)
                .text(request.getText())
                .createdDate(LocalDateTime.now())
                .build();
        return commentConverter.convert(commentRepository.save(comment));
    }

    @Override
    public List<CommentDTO> getCommentsForPractice(Integer practiceId) {
        List<Comment> comments = commentRepository.findByPracticeId(practiceId);
        return comments.stream()
                .map(commentConverter::convert)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteComment(Integer commentId) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new EntityNotFoundException("Comment not found with id: " + commentId));
        commentRepository.delete(comment);
    }
}
