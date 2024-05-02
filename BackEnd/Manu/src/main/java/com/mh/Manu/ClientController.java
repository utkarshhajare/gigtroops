package com.mh.Manu;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mh.dao.ClientDao;
import com.mh.model.Client;
import com.mh.model.Worker;




@RestController
//@RequestMapping("/login")
@CrossOrigin(origins = "*")
public class ClientController {
	@Autowired
	ClientDao clientDao;//dependency injection
	
	@RequestMapping("register")
	public String register(@RequestBody Client c1){
		clientDao.register(c1);
		return "Registration Successful..";
	}
	
	@RequestMapping("getAllClients")//@CrossOrigin(origins = {"http://localhost:4200"})
	public List <Client> getAllClients(){
			return clientDao.getAllClients();
	}
	@RequestMapping("getClientById/{id}")
	public Client getClientById(@PathVariable("id") Integer id){
		return clientDao.getClient(id);
	}
	@RequestMapping("getClientByEmail/{email}")
	public Client getClientByEmail(@PathVariable("email") String clientEmail){
		return clientDao.getClientByEmail(clientEmail); 
	}
	@GetMapping("/login/{email}/{password}")
	public Client login(@PathVariable("email") String email, @PathVariable("password") String password) {
		 Client saveFor =clientDao.login(email, password);
		 System.out.println(saveFor);
		 System.out.println(email+"/"+password);
	    return saveFor;
	}
//    @GetMapping("/login/{email}/{password}")
//	    public ResponseEntity<Client> clientLogin(@PathVariable String email, @PathVariable String password) {
//	        // Your client login logic
//	        Client client = clientDao.login(email, password); // assuming there's a clientDao for accessing worker data
//	        if (client != null) {
//	            return ResponseEntity.ok(client);
//	        } else {
//	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
//	        }
//	    }
	}


