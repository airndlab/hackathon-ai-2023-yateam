package ru.airnd.hackathonai2023.yateam.converter;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;
import ru.airnd.hackathonai2023.yateam.dto.UserDTO;
import ru.airnd.hackathonai2023.yateam.dto.VoteDTO;
import ru.airnd.hackathonai2023.yateam.entity.User;
import ru.airnd.hackathonai2023.yateam.entity.Vote;

@Component
public class VoteToVoteDTOConverter implements Converter<Vote, VoteDTO> {
    @Override
    public VoteDTO convert(Vote vote) {
        return VoteDTO.builder()
                .id(vote.getId())
                .rating(vote.getRating())
                .build();
    }
}
