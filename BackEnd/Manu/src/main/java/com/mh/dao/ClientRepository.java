package com.mh.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import org.springframework.stereotype.Repository;

import com.mh.model.Client;



@Repository
public interface ClientRepository extends JpaRepository<Client,Integer>{
	@Query("from Client c where c.email = :email and c.password = :password")
	public Client login(@Param("email") String email, @Param("password") String password);
}
