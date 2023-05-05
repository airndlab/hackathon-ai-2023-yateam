package ru.airnd.hackathonai2023.yateam.service;

import lombok.RequiredArgsConstructor;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.airnd.hackathonai2023.yateam.dto.DetailedPracticeDTO;
import ru.airnd.hackathonai2023.yateam.dto.PracticeDTO;
import ru.airnd.hackathonai2023.yateam.entity.Practice;
import ru.airnd.hackathonai2023.yateam.repository.PracticeRepository;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PracticeServiceImpl implements PracticeService {

    private final PracticeRepository practiceRepository;
    private final Converter<Practice, PracticeDTO> practiceDTOConverter;
    private final Converter<Practice, DetailedPracticeDTO> detailedPracticeDTOConverter;

    @Override
    public List<PracticeDTO> getAllPractices() {
        List<Practice> practices = practiceRepository.findAll();
        return practices.stream()
                .map(practiceDTOConverter::convert)
                .collect(Collectors.toList());
    }

    @Override
    public DetailedPracticeDTO getPracticeById(Integer practiceId) {
        Practice practice = practiceRepository.findById(practiceId)
                .orElseThrow(() -> new EntityNotFoundException("Practice with id " + practiceId + " not found"));
        return detailedPracticeDTOConverter.convert(practice);
    }

}
