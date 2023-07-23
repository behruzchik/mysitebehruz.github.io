package com.example.tailwindcrudexamplebackend.Controller;

import com.example.tailwindcrudexamplebackend.Payload.UsersDto;
import com.example.tailwindcrudexamplebackend.Service.UsersService.UsersService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UsersController {
    private final UsersService usersService;
    @GetMapping
    private HttpEntity<?> getUsers(){
      return usersService.getUser();
    }
    @PostMapping
    private HttpEntity<?> postUsers(@RequestBody UsersDto usersDto){
        return usersService.postUser(usersDto);
    }
    @PutMapping("/{id}")
    private HttpEntity<?> putUsers(@PathVariable Integer id, @RequestBody UsersDto usersDto){
        return usersService.putUser(id,usersDto);
    }
    @DeleteMapping("/{id}")
    private void deleteUser(@PathVariable Integer id){
         usersService.deleteUser(id);
    }
}
