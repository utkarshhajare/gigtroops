package com.mh.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class WorkRequest {
	@Id
    @GeneratedValue
    private Integer id;
    @ManyToOne
    private Client client;
    @ManyToOne
    private Worker worker;
    private String status; // Pending, Accepted, Denied
    
	public WorkRequest() {
		super();
		// TODO Auto-generated constructor stub
	}

	public WorkRequest(Integer id, Client client, Worker worker, String status) {
		super();
		this.id = id;
		this.client = client;
		this.worker = worker;
		this.status = status;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public Worker getWorker() {
		return worker;
	}

	public void setWorker(Worker worker) {
		this.worker = worker;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
    
}
