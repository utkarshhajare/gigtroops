package com.mh.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;




@Entity

public class Worker {
	@Id@GeneratedValue
	private int workerId;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String phoneNo;
	private String area;
	private String category;
	private int priceday;
	private int pricehr;
	private int workexp;
	private int reviews;
	 

	@Lob
	    private byte[] image; // Image data
	
	public Worker() {}

	public Worker(int workerId,String firstName, String lastName, String email, String password, String phoneNo,String area,String category,int priceday,int pricehr,int workexp, int reviews
			) {
		super();
		
		this.workerId = workerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.phoneNo = phoneNo;
		this.area = area;
		this.category=category;
		this.priceday=priceday;
		this.pricehr=pricehr;
		this.workexp = workexp;
		this.reviews = reviews;
		}
	
	
	public int getWorkerId() {
		return workerId;
	}

	public void setWorkerId(int workerId) {
		this.workerId = workerId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public int getPriceday() {
		return priceday;
	}

	public void setPriceday(int priceday) {
		this.priceday = priceday;
	}

	public int getPricehr() {
		return pricehr;
	}

	public void setPricehr(int pricehr) {
		this.pricehr = pricehr;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public int getWorkexp() {
		return workexp;
	}

	public void setWorkexp(int workexp) {
		this.workexp = workexp;
	}

	public int getReviews() {
		return reviews;
	}

	public void setReviews(int reviews) {
		this.reviews = reviews;
	}
	
	
}
