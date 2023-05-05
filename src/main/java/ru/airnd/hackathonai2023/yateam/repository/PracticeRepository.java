package ru.airnd.hackathonai2023.yateam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.airnd.hackathonai2023.yateam.entity.Practice;

public interface PracticeRepository extends JpaRepository<Practice, Integer> {
}
