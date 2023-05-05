package ru.airnd.hackathonai2023.yateam.converter;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;
import ru.airnd.hackathonai2023.yateam.dto.CategoryDTO;
import ru.airnd.hackathonai2023.yateam.entity.Category;

@Component
public class CategoryToCategoryDTOConverter implements Converter<Category, CategoryDTO> {
    @Override
    public CategoryDTO convert(Category category) {
        return CategoryDTO.builder()
                .id(category.getId())
                .name(category.getName())
                .build();
    }
}
