package com.example.tailwindcrudexamplebackend.Repository;

import com.example.tailwindcrudexamplebackend.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepo extends JpaRepository<Users,Integer> {
}
