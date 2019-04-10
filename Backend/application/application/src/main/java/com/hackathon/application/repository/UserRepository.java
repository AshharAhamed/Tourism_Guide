package com.hackathon.application.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.hackathon.application.Entity.User;

public interface UserRepository extends CrudRepository<User, Long> {
	
    List<User> findByEmail(String email);
    
    List<User> findByEmailAndPassword(String email, String contactNumber);

    @Transactional
    void deleteByEmailAndPassword(String email, String contactNumber);

    @Transactional
    void deleteByEmail(String email);
}