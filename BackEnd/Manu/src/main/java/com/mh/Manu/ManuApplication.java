package com.mh.Manu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.web.bind.annotation.CrossOrigin;

@EnableJpaRepositories(basePackages="com.mh.dao")
@EntityScan(basePackages="com.mh.model")
@SpringBootApplication(scanBasePackages="com")
public class ManuApplication {

	public static void main(String[] args) {
		SpringApplication.run(ManuApplication.class, args);
	}

}
