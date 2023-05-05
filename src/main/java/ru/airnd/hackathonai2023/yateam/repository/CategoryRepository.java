package ru.airnd.hackathonai2023.yateam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.airnd.hackathonai2023.yateam.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
