package ru.airnd.hackathonai2023.yateam.service;

public interface RatingService {

    void addRating(Integer practiceId, Integer rating);

    void deleteRating(Integer practiceId);

}
