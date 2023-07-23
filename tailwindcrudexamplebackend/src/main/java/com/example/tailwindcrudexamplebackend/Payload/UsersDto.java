package com.example.tailwindcrudexamplebackend.Payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsersDto {
    private String firstName;
    private String lastName;
    private Integer age;
}
