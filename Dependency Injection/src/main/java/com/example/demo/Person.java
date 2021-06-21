package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

//Tells the spring that we want this class to be inside the spring container.
@Component

//Allows you to create multiple instances of the person class/component
@Scope("prototype")

public class Person {
	private int pid;
	private String pname;
	private String tech;
	
	//Allows you to use a component class in another component class
	@Autowired
	//Not needed but adds a level of specification
	@Qualifier("laptop1")
	private Laptop laptop;
	
	//Need a second autowired for the second qualifier to work 
	@Autowired
	@Qualifier("street1")
	private Address addy;

	public Person() {
		System.out.println("Object Created");
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public String getTech() {
		return tech;
	}

	public void setTech(String tech) {
		this.tech = tech;
	}

	public Laptop getLaptop() {
		return laptop;
	}
	
	public void setLaptop(Laptop laptop) {
		this.laptop = laptop;
	}
	
	
	public Address getAddress() {
		return addy;
	}
	
	public void setAddress(Address addy) {
		this.addy = addy;
	}
	
	public void show() {
		System.out.println("ID: " + getPid());
		System.out.println("Name: " + getPname());
		System.out.println("Tech: " + getTech());
		
		//Can use this because Autowired
		laptop.osName();
		laptop.usefulLife();
		addy.boroughName();
		addy.safety();
	}
}
