package ru.airnd.hackathonai2023.yateam.converter;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;
import ru.airnd.hackathonai2023.yateam.dto.UserDTO;
import ru.airnd.hackathonai2023.yateam.entity.User;

@Component
public class UserToUserDTOConverter implements Converter<User, UserDTO> {
    @Override
    public UserDTO convert(User user) {
        return UserDTO.builder()
                .id(user.getId())
                .username(user.getUsername())
                .build();
    }
}
