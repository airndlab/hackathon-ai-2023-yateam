package ru.airnd.hackathonai2023.yateam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.airnd.hackathonai2023.yateam.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByUsername(String username);

}
