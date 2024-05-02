package com.mh.dao;

import java.util.List;

import javax.persistence.EntityNotFoundException;

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
	public Worker getWorkerByEmail(String workerEmail){
		return workerRepository.findByEmail(workerEmail).orElse(new Worker());
	}

	public List<Worker> getAllWorkers(){
		return workerRepository.findAll();
	}	
	public Worker workerlogin(String email, String password) {
	    return workerRepository.workerlogin(email, password);
	}
	 public Worker updateWorker(int workerId, Worker updatedWorker) {
	        Worker existingWorker = workerRepository.findById(workerId)
	                .orElseThrow(() -> new EntityNotFoundException("Worker not found"));

	        // Update worker's information
	        existingWorker.setFirstName(updatedWorker.getFirstName());
	        existingWorker.setLastName(updatedWorker.getLastName());
	        existingWorker.setEmail(updatedWorker.getEmail());
	        existingWorker.setPassword(updatedWorker.getPassword());
	        existingWorker.setPhoneNo(updatedWorker.getPhoneNo());
	        existingWorker.setArea(updatedWorker.getArea());
	        existingWorker.setCategory(updatedWorker.getCategory());
	        existingWorker.setPriceday(updatedWorker.getPriceday());
	        existingWorker.setPricehr(updatedWorker.getPricehr());
	        existingWorker.setImage(updatedWorker.getImage());
	        existingWorker.setWorkexp(updatedWorker.getWorkexp());
	        existingWorker.setReviews(updatedWorker.getReviews());
	        // Update other fields as needed

	        return workerRepository.save(existingWorker);
	    }
}
