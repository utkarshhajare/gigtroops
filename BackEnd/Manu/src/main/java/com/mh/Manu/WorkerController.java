package com.mh.Manu;

import java.io.IOException;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mh.dao.ClientRepository;
import com.mh.dao.WorkRequestRepository;
import com.mh.dao.WorkerDao;
import com.mh.dao.WorkerRepository;
import com.mh.model.Client;
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
     ClientRepository clientRepository;
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
	@RequestMapping("getWorkerByEmail/{email}")
	public Worker getWorkerByEmail(@PathVariable("email") String workerEmail){
		return workerDao.getWorkerByEmail(workerEmail); 
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
	    @GetMapping("/{workerId}/respondedRequests")
	    public List<WorkRequest> getRespondedWorkerRequests(@PathVariable Integer workerId) {
	        Worker worker = workerRepository.findById(workerId).orElseThrow(() -> new EntityNotFoundException("Worker not found"));
	        return workRequestRepository.findByWorkerAndStatusNot(worker, "!Pending");
	    }
	    @PostMapping("/{workerId}/hire")
	    public ResponseEntity<?> createWorkRequest(@PathVariable Integer workerId, @RequestBody Map<String, Integer> requestPayload) { 
	        // Extract the clientId from the request payload
	        Integer clientId = requestPayload.get("clientId");

	        // Validate the data (e.g., check for required fields, data formats, etc.)
	        // If validation fails, return an appropriate response (e.g., BadRequest)

	        // Retrieve the worker by ID
	        Worker worker = workerRepository.findById(workerId)
	                .orElseThrow(() -> new EntityNotFoundException("Worker not found"));

	        // Retrieve the client by ID
	        Client client = clientRepository.findById(clientId)
	                .orElseThrow(() -> new EntityNotFoundException("Client not found"));

	        // Create a new WorkRequest and set its attributes
	        WorkRequest workRequest = new WorkRequest();
	        workRequest.setWorker(worker);
	        workRequest.setClient(client);
	        workRequest.setStatus("Pending"); // Set status as "pending"
	        workRequest.setRequestTime(new Date()); // Set the current time using java.util.Date
	        workRequest.setIsRead(false);

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
	        request.setRequestTime(new Date());
	        workRequestRepository.save(request);
	    }
	    
	    @PutMapping("/requests/{requestId}/deny")
	    public void denyRequest(@PathVariable Integer requestId) {
	        WorkRequest request = workRequestRepository.findById(requestId).orElseThrow(() -> new EntityNotFoundException("Work request not found"));
	        request.setStatus("Denied");
	        request.setRequestTime(new Date());
	        workRequestRepository.save(request);
	    }
	    @PutMapping("/update/{workerId}")
	    public ResponseEntity<Worker> updateWorker(@PathVariable int workerId, @RequestBody Worker updatedWorker) {
	        Worker updated = workerDao.updateWorker(workerId, updatedWorker);
	        return new ResponseEntity<>(updated, HttpStatus.OK);
	    }
	    
	    
	    @PostMapping("/uploadImage/{workerId}")
	    public ResponseEntity<String> uploadImage(@PathVariable("workerId") int workerId, @RequestPart("image") MultipartFile image) {
	        Worker worker = workerRepository.findById(workerId).orElseThrow(() -> new EntityNotFoundException("Worker not found"));
	        
	        try {
	            worker.setImage(image.getBytes());
	            workerRepository.save(worker);
	            return ResponseEntity.ok("Image uploaded successfully.");
	        } catch (IOException e) {
	            e.printStackTrace();
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload image.");
	        }
	    }
	    @GetMapping("/{workerId}/image")
	    public ResponseEntity<byte[]> getWorkerImage(@PathVariable int workerId) {
	        Worker worker = workerRepository.findById(workerId).orElseThrow(() -> new EntityNotFoundException("Worker not found"));
	        byte[] imageData = worker.getImage();
	        if (imageData != null && imageData.length > 0) {
	            HttpHeaders headers = new HttpHeaders();
	            headers.setContentType(MediaType.IMAGE_JPEG); // Assuming image is JPEG format, adjust accordingly
	            headers.setContentLength(imageData.length);
	            return new ResponseEntity<>(imageData, headers, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }
	    @GetMapping("/client/{clientId}/notifications")
	    public List<WorkRequest> getClientNotifications(@PathVariable Integer clientId) {
	        List<String> status = Arrays.asList("Accepted", "Denied");
	        return workRequestRepository.findByClientIdAndStatusIn(clientId, status);
	    }

	    @PutMapping("/{workRequestId}/markAsRead")
	    public ResponseEntity<?> markAsRead(@PathVariable Integer workRequestId) {
	        WorkRequest workRequest = workRequestRepository.findById(workRequestId)
	                .orElseThrow(() -> new EntityNotFoundException("Work request not found"));

	        workRequest.setIsRead(true);
	        workRequestRepository.save(workRequest);

	        return ResponseEntity.status(HttpStatus.OK).build();
	    }
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
	


