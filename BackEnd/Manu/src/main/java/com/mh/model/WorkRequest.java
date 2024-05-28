package com.mh.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

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
    private Boolean isRead = false;
    
    @Temporal(TemporalType.TIMESTAMP)
    private Date requestTime;

    public WorkRequest() {
        super();
    }

    public WorkRequest(Integer id, Client client, Worker worker, String status, Date requestTime, Boolean isRead) {
        super();
        this.id = id;
        this.client = client;
        this.worker = worker;
        this.status = status;
        this.requestTime = requestTime;
        this.isRead = isRead;
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

    public Date getRequestTime() {
        return requestTime;
    }

    public void setRequestTime(Date requestTime) {
        this.requestTime = requestTime;
    }

	public Boolean getIsRead() {
		return isRead;
	}

	public void setIsRead(Boolean isRead) {
		this.isRead = isRead;
	}
}
