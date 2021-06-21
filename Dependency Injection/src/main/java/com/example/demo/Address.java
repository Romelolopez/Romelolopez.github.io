package com.example.demo;

import org.springframework.stereotype.Component;

@Component("street1")

public class Address {
	
	private String borough;

	public String getBorough() {
		return borough;
	}

	public void setBorough(String borough) {
		this.borough = borough;
	}
	
	
	public void boroughName() {
		System.out.println("Borough: " + getBorough());
	}
	
	public void safety() {
		switch(getBorough()) {
		case "Staten Island":
			System.out.println(getBorough() + " is Rank 1st in NYC for safest borough");
			break;
		case "Manhattan":
			System.out.println(getBorough() + " is Rank 2nd in NYC for safest borough");
			break;
		case "Queens":
			System.out.println(getBorough() + " is Rank 3rd in NYC for safest borough");
			break;
		case "Brooklyn":
			System.out.println(getBorough() + " is Rank 4th in NYC for safest borough");
			break;
		case "Bronx":
			System.out.println(getBorough() + " is Rank 5th in NYC for safest borough");
			break;
		default:
		    System.out.println(getBorough() + " is Are you sure you from new york city?");
		}
	}

	
	
}
