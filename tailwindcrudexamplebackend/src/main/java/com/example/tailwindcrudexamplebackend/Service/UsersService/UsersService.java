package com.example.tailwindcrudexamplebackend.Service.UsersService;

import com.example.tailwindcrudexamplebackend.Payload.UsersDto;
import org.springframework.http.HttpEntity;

public interface UsersService {
    HttpEntity<?> getUser();

    HttpEntity<?> postUser(UsersDto usersDto);

    HttpEntity<?> putUser(Integer id, UsersDto usersDto);

    void deleteUser(Integer id);
}
