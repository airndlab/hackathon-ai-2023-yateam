package ru.airnd.hackathonai2023.yateam.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDTO {

    private Integer id;
    private String username;

}
