package com.mh.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mh.model.Worker;


@Service
public class WorkerDao {

	@Autowired
	WorkerRepository workerRepository;

	public void registerWorker(Worker worker){
		workerRepository.save(worker);
	}
	 public void deleteWorkerById(int WorkerId) {
			workerRepository.deleteById(WorkerId);
		}

	
	public Worker getWorker(int workerId){
		return workerRepository.findById(workerId).orElse(new Worker());
	}


	public List<Worker> getAllWorkers(){
		return workerRepository.findAll();
	}	
	public Worker workerlogin(String email, String password) {
	    return workerRepository.workerlogin(email, password);
	}
}
