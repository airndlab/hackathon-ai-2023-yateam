package ru.airnd.hackathonai2023.yateam.service;

import ru.airnd.hackathonai2023.yateam.dto.VoteDTO;

public interface RatingService {

    VoteDTO addRating(Integer practiceId, Integer rating);

    void deleteRating(Integer practiceId);

    Double getRatingByPracticeId(Integer practiceId);

    Integer getNumberOfVotesByPracticeId(Integer practiceId);

}
