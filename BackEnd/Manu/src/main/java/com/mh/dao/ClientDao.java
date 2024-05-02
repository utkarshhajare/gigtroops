package com.mh.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mh.model.Client;
import com.mh.model.Worker;



@Service
public class ClientDao {
	@Autowired
	ClientRepository clientRepository;

	public void register(Client client){
		clientRepository.save(client);
	}
	
	public Client getClient(int clientId){
		return clientRepository.findById(clientId).orElse(new Client());
	}
	public Client getClientByEmail(String clientEmail){
		return clientRepository.findByEmail(clientEmail).orElse(new Client());
	}

	public List<Client> getAllClients(){
		return clientRepository.findAll();
	}	
	public Client login(String email, String password) {
	    return clientRepository.login(email, password);
	}
}
