package ru.airnd.hackathonai2023.yateam.service;

import ru.airnd.hackathonai2023.yateam.dto.CategoryDTO;

import java.util.List;

public interface CategoryService {
    List<CategoryDTO> getAll();
}
