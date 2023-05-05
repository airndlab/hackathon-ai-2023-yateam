package ru.airnd.hackathonai2023.yateam.service;

import lombok.RequiredArgsConstructor;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Service;
import ru.airnd.hackathonai2023.yateam.dto.CategoryDTO;
import ru.airnd.hackathonai2023.yateam.entity.Category;
import ru.airnd.hackathonai2023.yateam.repository.CategoryRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;
    private final Converter<Category, CategoryDTO> categoryCategoryDTOConverter;

    @Override
    public List<CategoryDTO> getAll() {
        List<Category> categories = categoryRepository.findAll();
        return categories.stream()
                .map(categoryCategoryDTOConverter::convert)
                .collect(Collectors.toList());
    }
}
