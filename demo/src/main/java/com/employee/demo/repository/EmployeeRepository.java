package com.employee.demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.employee.demo.entity.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
	
	
}
