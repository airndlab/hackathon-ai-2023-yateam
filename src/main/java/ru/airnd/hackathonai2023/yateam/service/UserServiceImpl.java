package ru.airnd.hackathonai2023.yateam.service;

import lombok.RequiredArgsConstructor;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import ru.airnd.hackathonai2023.yateam.dto.UserDTO;
import ru.airnd.hackathonai2023.yateam.entity.User;
import ru.airnd.hackathonai2023.yateam.repository.UserRepository;

import javax.persistence.EntityNotFoundException;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final Converter<User, UserDTO> userUserDTOConverter;

    @Override
    public UserDTO getCurrentUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found with username: " + username));
        return userUserDTOConverter.convert(user);
    }
}
