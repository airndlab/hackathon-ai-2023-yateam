package ru.airnd.hackathonai2023.yateam.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.airnd.hackathonai2023.yateam.dto.UserDTO;
import ru.airnd.hackathonai2023.yateam.service.UserService;

@RestController
@RequestMapping("/api/users")
@Tag(name = "UserController", description = "Контроллер для работы с пользователями")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/me")
    @Operation(summary = "Получить текущего пользователя")
    public ResponseEntity<UserDTO> getCurrentUser() {
        return ResponseEntity.ok(userService.getCurrentUser());
    }
}
