package ru.airnd.hackathonai2023.yateam.converter;

import lombok.RequiredArgsConstructor;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;
import ru.airnd.hackathonai2023.yateam.dto.PracticeDTO;
import ru.airnd.hackathonai2023.yateam.entity.Practice;
import ru.airnd.hackathonai2023.yateam.service.RatingService;

@Component
@RequiredArgsConstructor
public class PracticeToPracticeDTOConverter implements Converter<Practice, PracticeDTO> {
    private final RatingService ratingService;

    @Override
    public PracticeDTO convert(Practice practice) {
        return PracticeDTO.builder()
                .id(practice.getId())
                .category(practice.getCategory().getName())
                .name(practice.getName())
                .author(practice.getAuthor())
                .rating(ratingService.getRatingByPracticeId(practice.getId()))
                .votes(ratingService.getNumberOfVotesByPracticeId(practice.getId()))
                .build();
    }
}
