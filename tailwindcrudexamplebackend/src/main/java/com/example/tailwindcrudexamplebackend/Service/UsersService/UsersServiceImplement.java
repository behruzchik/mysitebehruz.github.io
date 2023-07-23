package com.example.tailwindcrudexamplebackend.Service.UsersService;

import com.example.tailwindcrudexamplebackend.Entity.Users;
import com.example.tailwindcrudexamplebackend.Payload.UsersDto;
import com.example.tailwindcrudexamplebackend.Repository.UsersRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UsersServiceImplement implements UsersService{
    private final UsersRepo usersRepo;
    @Override
    public HttpEntity<?> getUser() {
        return ResponseEntity.ok(usersRepo.findAll());
    }

    @Override
    public HttpEntity<?> postUser(UsersDto usersDto) {
        Users user=savedUser(usersDto);
        if (!usersDto.getFirstName().equals("") && !usersDto.getLastName().equals("") && usersDto.getAge() > 101){
            return ResponseEntity.ok(usersRepo.save(user));
        }else {
            return sendErrorMessage("Error has occured in postting process");
        }

    }

    private HttpEntity<?> sendErrorMessage(String text) {
       return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(text);
    }

    private static Users savedUser(UsersDto usersDto) {
      Users user= Users.builder()
               .firstName(usersDto.getFirstName())
               .lastName(usersDto.getLastName())
               .age(usersDto.getAge())
               .build();
      return user;
    }

    @Override
    public HttpEntity<?> putUser(Integer id, UsersDto usersDto) {
        if (!usersDto.getFirstName().equals("") && !usersDto.getLastName().equals("") && usersDto.getAge() > 101){
            Users editedUser=editingProject(id, usersDto);
            return ResponseEntity.ok(editedUser);
        }else {
           return sendErrorMessage("Error has occured in editing process");
        }
    }

    private Users editingProject(Integer id, UsersDto usersDto) {
        Users editingUser = usersRepo.findById(id).get();
        editingUser.setFirstName(usersDto.getFirstName());
        editingUser.setLastName(usersDto.getLastName());
        editingUser.setAge(usersDto.getAge());
        return editingUser;
    }

    @Override
    public void deleteUser(Integer id) {
          if (id!=null){
           usersRepo.deleteById(id);
          }
    }
}
