package com.example.demo;

import org.springframework.stereotype.Component;

@Component("laptop1")

public class Laptop {
	
	private int lid;
	private String OS;
	private int year;
	
	public int getLid() {
		return lid;
	}
	public void setLid(int lid) {
		this.lid = lid;
	}
	
	public String getOS() {
		return OS;
	}
	
	public void setOS(String brand) {
		this.OS = brand;
	}
	
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	
	
	public void osName() {
		System.out.println("OS: "+ getOS());
	}
	
	public void usefulLife() {
		if ((7 - getYear()) == 0) {
			System.out.println("Your laptop has " + (7 - getYear()) + " in its useful lifespan.");
			System.out.println("It might be time for a new laptop");
		}
		else
		{
			System.out.println("Your laptop has " + (7 - getYear()) + " years left in its useful lifespan");
		}
		
	}

}
