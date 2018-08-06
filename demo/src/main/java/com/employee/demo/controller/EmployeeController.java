package com.employee.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.employee.demo.entity.Employee;
import com.employee.demo.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/company")
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;
	
	@RequestMapping(path="/create/employee", method=RequestMethod.POST)
	public String createEmployee(@RequestBody List<Employee> employees) {
		
		employeeService.save(employees);
		
		return null;
	}
	
	
}
