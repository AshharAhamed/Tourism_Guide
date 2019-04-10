package com.hackathon.application.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Home {

	@GetMapping("/hello")
    public String index() {
		System.out.println("Greetings from Spring Boot!");
        return "Greetings from Spring Boot!";
    }
	
	
}
