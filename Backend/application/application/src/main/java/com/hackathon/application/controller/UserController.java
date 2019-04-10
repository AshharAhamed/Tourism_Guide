package com.hackathon.application.controller;

import java.io.IOException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hackathon.application.Entity.User;
import com.hackathon.application.repository.UserRepository;

@RestController
@RequestMapping(path = "/user")
public class UserController {

	 private UserRepository repository;
	 
	 @GetMapping("/hello")
	    public String index() {
			System.out.println("Greetings from Spring Boot!");
			User user =new User();
			user.setContactNumber("0779220352");
			user.setCountry("Srilanka");
			user.setEmail("ashharahmed00@gmail.com");
			user.setfName("Ashhar");
			user.setlName("Ahamed");
			user.setGender("Male");
			
			ObjectMapper Obj = new ObjectMapper();
	        try { 
	        	  
	            // get Oraganisation object as a json string 
	            String jsonStr = Obj.writeValueAsString(user); 
	  
	            // Displaying JSON String 
	            System.out.println(jsonStr); 
	        } 
	  
	        catch (IOException e) { 
	            e.printStackTrace(); 
	        } 
	        return "Greetings from Spring Boot!";
	    }
	 
	@PostMapping
	public User create(@RequestBody User user){
	    return repository.save(user);
	}
	
}
