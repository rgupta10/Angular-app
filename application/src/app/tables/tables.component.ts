import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/Employee';
import {EmployeeService} from '../service/employee.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  employees: Employee []=[];

  constructor(private employeeService:EmployeeService) {
    this.employeeService.obs.subscribe(emp => this.employees.push(emp));
  }

  ngOnInit() {
  }

  onSave(){
    // employeeService save data call
    this.employeeService.saveToDB(this.employees);
    this.employees=[];
  }

  onClear(){
    this.employees=[];
  }
}
