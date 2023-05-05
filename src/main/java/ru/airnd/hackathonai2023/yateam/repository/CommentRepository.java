package ru.airnd.hackathonai2023.yateam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.airnd.hackathonai2023.yateam.entity.Comment;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

    List<Comment> findByPracticeId(Integer practiceId);

}
