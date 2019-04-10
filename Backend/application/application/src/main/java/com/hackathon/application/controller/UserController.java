package com.hackathon.application.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	 
	 @PostMapping(path = "/add", consumes = "application/json", produces = "application/json")
	public User create(@RequestBody User user){
		System.out.println(user);
	    return repository.save(user);
	}
	 
	 @GetMapping
	 public List<User> findAll(){
	   return (List<User>) repository.findAll();
	 }
	
	 @GetMapping(path = {"/{id}"})
	 public ResponseEntity<User> findById(@PathVariable long id){
	   return repository.findById(id)
	           .map(record -> ResponseEntity.ok().body(record))
	           .orElse(ResponseEntity.notFound().build());
	 }
	 
	 @PutMapping(value="/{id}")
	  public ResponseEntity<User> update(@PathVariable("id") long id,
	                                        @RequestBody User user){
	    return repository.findById(id)
	        .map(record -> {
	            record.setfName(user.getfName());
	            record.setEmail(user.getEmail());
	            record.setlName(user.getlName());
	            record.setContactNumber(user.getContactNumber());
	            record.setCountry(user.getCountry());
	            record.setDateOfBirth(user.getDateOfBirth());
	            record.setGender(user.getGender());
	            User updated = repository.save(record);
	            return ResponseEntity.ok().body(updated);
	        }).orElse(ResponseEntity.notFound().build());
	  }
}
