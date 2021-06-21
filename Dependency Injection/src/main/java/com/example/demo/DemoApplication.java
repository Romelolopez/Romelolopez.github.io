package com.example.demo;

import java.util.*;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
	ConfigurableApplicationContext	Context = SpringApplication.run(DemoApplication.class, args);	
	
	//Scanner for system input
	Scanner scan = new Scanner(System.in);
	
	//Object
	Person p1 = Context.getBean(Person.class);
	
	//Input for ID
	System.out.println("Enter id number");
	p1.setPid(scan.nextInt());
	
	//Input for first name 
	System.out.println("Enter the first name");
	p1.setPname(scan.next().trim());
	
	//Input for tech
	System.out.println("What tech are you using?");
	p1.setTech(scan.next());
	
	//Input for OS
	System.out.println("What operating system do you have?");
	p1.getLaptop().setOS(scan.next());
	
	//Input for years
	System.out.println("How many years have you owned the laptop?");
	p1.getLaptop().setYear(scan.nextInt());
	
	//Input for borough
	System.out.println("What borough do you live in?");
	String town = scan.next();
	p1.getAddress().setBorough(town.substring(0, 1).toUpperCase() + town.substring(1));
	System.out.println();
	
	//Method that displays all
	p1.show();
	
	
	scan.close();

	}

}

