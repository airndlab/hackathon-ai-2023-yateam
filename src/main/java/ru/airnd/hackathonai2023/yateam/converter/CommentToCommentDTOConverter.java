package ru.airnd.hackathonai2023.yateam.converter;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;
import ru.airnd.hackathonai2023.yateam.dto.CommentDTO;
import ru.airnd.hackathonai2023.yateam.entity.Comment;

@Component
public class CommentToCommentDTOConverter implements Converter<Comment, CommentDTO> {
    @Override
    public CommentDTO convert(Comment comment) {
        return CommentDTO.builder()
                .id(comment.getId())
                .authorId(comment.getUser().getId())
                .authorName(comment.getUser().getUsername())
                .text(comment.getText())
                .dateCreated(comment.getCreatedDate())
                .build();
    }
}