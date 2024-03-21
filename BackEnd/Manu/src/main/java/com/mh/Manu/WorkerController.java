package com.mh.Manu;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mh.dao.WorkRequestRepository;
import com.mh.dao.WorkerDao;
import com.mh.dao.WorkerRepository;
import com.mh.model.WorkRequest;
import com.mh.model.Worker;



@RestController
//@RequestMapping("/login")
@CrossOrigin(origins = "*")
public class WorkerController {
	@Autowired
	private WorkerDao workerDao;  //dependency injection
	@Autowired
	WorkerRepository workerRepository;
	 @Autowired
	    private WorkRequestRepository workRequestRepository;
	    
	@RequestMapping("registerWorker")
	public void registerWorker(@RequestBody Worker w1) {
		System.out.println("Data Recieved : "+w1.getCategory());
		workerDao.registerWorker(w1);
	}
	
	@RequestMapping("getAllWorkers")//@CrossOrigin(origins = {"http://localhost:4200"})
	public List <Worker> getAllWorkers(){
		
		return workerDao.getAllWorkers();
	}
	@RequestMapping("getWorkerById/{id}")
	public Worker getWorkerById(@PathVariable("id") int workerId){
		return workerDao.getWorker(workerId); 
	}
	@GetMapping("/workerlogin/{email}/{password}")
	public Worker login(@PathVariable("email") String email, @PathVariable("password") String password) {
	    return workerDao.workerlogin(email, password);
	}
	
	@DeleteMapping("/deleteWorker/{id}")
	public String deleteWorkerById(@PathVariable("id") int workerId) {
		System.out.println("workerId: " + workerId);
		workerDao.deleteWorkerById(workerId);
		return "Deleted Worker with id " + workerId;
	}
	
	    // endpoint for worker to view work requests
	    @GetMapping("/{workerId}/requests")
	    public List<WorkRequest> getWorkerRequests(@PathVariable Integer workerId) {
	        Worker worker = workerRepository.findById(workerId).orElseThrow(() -> new EntityNotFoundException("Worker not found"));
	        return workRequestRepository.findByWorkerAndStatus(worker, "Pending");
	    }
	    @PostMapping("/{workerId}/hire")
	    public ResponseEntity<?> createWorkRequest(@PathVariable Integer workerId, @RequestBody WorkRequest workRequest) {
	        // Validate the data (e.g., check for required fields, data formats, etc.)
	        // If validation fails, return an appropriate response (e.g., BadRequest)

	        // Retrieve the worker by ID
	        Worker worker = workerRepository.findById(workerId)
	                .orElseThrow(() -> new EntityNotFoundException("Worker not found"));

	        // Associate the work request with the worker
	        workRequest.setWorker(worker);

	        // Set any other necessary fields in the work request

	        // Save the work request to the database
	        workRequestRepository.save(workRequest);

	        // Return a success response (e.g., HTTP status 201 Created)
	        return ResponseEntity.status(HttpStatus.CREATED).build();
	    }

	    
	    // endpoint for worker to accept or deny work request
	    @PutMapping("/requests/{requestId}/accept")
	    public void acceptRequest(@PathVariable Integer requestId) {
	        WorkRequest request = workRequestRepository.findById(requestId).orElseThrow(() -> new EntityNotFoundException("Work request not found"));
	        request.setStatus("Accepted");
	        workRequestRepository.save(request);
	    }
	    
	    @PutMapping("/requests/{requestId}/deny")
	    public void denyRequest(@PathVariable Integer requestId) {
	        WorkRequest request = workRequestRepository.findById(requestId).orElseThrow(() -> new EntityNotFoundException("Work request not found"));
	        request.setStatus("Denied");
	        workRequestRepository.save(request);
	    }
	
//	@GetMapping("/workerlogin/{email}/{password}")
//	    public ResponseEntity<Worker> workerLogin(@PathVariable String email, @PathVariable String password) {
//	        // Your worker login logic
//	        Worker worker = workerDao.workerlogin(email, password); // assuming there's a workerDao for accessing worker data
//	        if (worker != null) {
//	            return ResponseEntity.ok(worker);
//	        } else {
//	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
//	        }
//	    }
	}


