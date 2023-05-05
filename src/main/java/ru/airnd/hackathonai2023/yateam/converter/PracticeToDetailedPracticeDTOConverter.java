package ru.airnd.hackathonai2023.yateam.converter;

import lombok.RequiredArgsConstructor;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;
import ru.airnd.hackathonai2023.yateam.dto.DetailedPracticeDTO;
import ru.airnd.hackathonai2023.yateam.entity.Practice;
import ru.airnd.hackathonai2023.yateam.service.RatingService;

@Component
@RequiredArgsConstructor
public class PracticeToDetailedPracticeDTOConverter implements Converter<Practice, DetailedPracticeDTO> {
    private final RatingService ratingService;

    @Override
    public DetailedPracticeDTO convert(Practice practice) {
        return DetailedPracticeDTO.builder()
                .id(practice.getId())
                .category(practice.getCategory().getName())
                .author(practice.getAuthor())
                .name(practice.getName())
                .description(practice.getDescription())
                .link(practice.getLink())
                .rating(ratingService.getRatingByPracticeId(practice.getId()))
                .votes(ratingService.getNumberOfVotesByPracticeId(practice.getId()))
                .build();
    }
}
