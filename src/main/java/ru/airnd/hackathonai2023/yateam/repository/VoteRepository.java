package ru.airnd.hackathonai2023.yateam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import ru.airnd.hackathonai2023.yateam.entity.Vote;

import java.util.List;
import java.util.Optional;

public interface VoteRepository extends JpaRepository<Vote, Integer> {
    List<Vote> findByPracticeId(Integer practiceId);

    @Query("SELECT COUNT(v) FROM Vote v WHERE v.practice.id = :practiceId")
    Integer countByPracticeId(@Param("practiceId") Integer practiceId);

    Optional<Vote> findByPracticeIdAndUserId(Integer practiceId, Integer id);
    @Query("SELECT v FROM Vote v WHERE v.user.username = :username")
    Optional<Vote> findByUsername(@Param("username") String username);
}
