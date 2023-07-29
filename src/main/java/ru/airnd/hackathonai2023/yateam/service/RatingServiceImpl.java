package ru.airnd.hackathonai2023.yateam.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.airnd.hackathonai2023.yateam.converter.VoteToVoteDTOConverter;
import ru.airnd.hackathonai2023.yateam.dto.VoteDTO;
import ru.airnd.hackathonai2023.yateam.entity.Practice;
import ru.airnd.hackathonai2023.yateam.entity.User;
import ru.airnd.hackathonai2023.yateam.entity.Vote;
import ru.airnd.hackathonai2023.yateam.repository.PracticeRepository;
import ru.airnd.hackathonai2023.yateam.repository.UserRepository;
import ru.airnd.hackathonai2023.yateam.repository.VoteRepository;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class RatingServiceImpl implements RatingService {
    private final VoteRepository voteRepository;
    private final PracticeRepository practiceRepository;
    private final UserRepository userRepository;
    private final VoteToVoteDTOConverter voteToVoteDTOConverter;

    @Override
    public VoteDTO addRating(Integer practiceId, Integer rating) {
        Practice practice = practiceRepository.findById(practiceId)
                .orElseThrow(() -> new EntityNotFoundException("Practice not found with id: " + practiceId));
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found with username: " + username));
        Optional<Vote> optionalVote = voteRepository.findByPracticeIdAndUserId(practiceId, user.getId());
        Vote vote = optionalVote.orElseGet(() -> {
            Vote newVote = new Vote();
            newVote.setPractice(practice);
            newVote.setUser(user);
            return newVote;
        });
        vote.setRating(rating);
        return voteToVoteDTOConverter.convert(voteRepository.save(vote));
    }

    @Override
    public void deleteRating(Integer practiceId) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found with username: " + username));
        Optional<Vote> voteOptional = voteRepository.findByPracticeIdAndUserId(practiceId, user.getId());
        if (voteOptional.isPresent()) {
            Vote vote = voteOptional.get();
            voteRepository.delete(vote);
        } else {
            throw new EntityNotFoundException("No vote found for practice id: " + practiceId + " and user: " + username);
        }
    }

    @Override
    public Double getRatingByPracticeId(Integer practiceId) {
        List<Vote> votes = voteRepository.findByPracticeId(practiceId);
        if (votes.isEmpty()) {
            return null;
        }
        double sum = 0;
        for (Vote vote : votes) {
            sum += vote.getRating();
        }
        double result = sum / votes.size();
        return Math.round(result * 10.0) / 10.0;
    }

    @Override
    public Integer getNumberOfVotesByPracticeId(Integer practiceId) {
        return voteRepository.countByPracticeId(practiceId);
    }
}
