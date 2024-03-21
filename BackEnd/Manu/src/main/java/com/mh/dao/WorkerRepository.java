package com.mh.dao;

//import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.mh.model.Worker;

@Repository
public interface WorkerRepository extends JpaRepository<Worker,Integer> {
	@Query("from Worker w where w.email = :email and w.password = :password")
	public Worker workerlogin(@Param("email") String email, @Param("password") String password);

	
}
