package com.mh.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mh.model.WorkRequest;
import com.mh.model.Worker;

@Repository
	public interface WorkRequestRepository extends JpaRepository<WorkRequest, Integer> {
	    List<WorkRequest> findByWorkerAndStatus(Worker worker, String status);

		List<WorkRequest> findByWorkerAndStatusNot(Worker worker, String status);
	}


