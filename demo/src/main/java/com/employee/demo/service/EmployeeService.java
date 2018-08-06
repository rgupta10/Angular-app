package com.employee.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.employee.demo.entity.Employee;
import com.employee.demo.repository.EmployeeRepository;

@Service

public class EmployeeService {
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	
	public boolean save(List<Employee> employees) {
		try {
			employeeRepository.saveAll(employees);
		}catch(Exception e) {
			return false;
		}
		return true;
	}
	
}
