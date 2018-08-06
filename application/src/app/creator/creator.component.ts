import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Employee} from '../model/Employee';
import {EmployeeService} from '../service/employee.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {
  form: FormGroup;
  
  name: String = '';
  department: String = '';
  salary: number ;


  constructor(private formBuilder: FormBuilder, private employeeService:EmployeeService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      department: [null, [Validators.required]],
      salary: [null, [Validators.required,Validators.min(10000),Validators.max(500000000)]],
    });
  }
  onCreateEmployee(){
    if (!this.form.valid) {
      alert("Please check all fields for their data type and no field should be empty");
      return false;
    } 
    var newEmp: Employee = {
      name:this.form.controls['name'].value,
      department:this.form.controls['department'].value,
      salary:this.form.controls['salary'].value,
    };
    this.form.reset();
    console.log(this.form.valid+""+newEmp);
    this.employeeService.addEmployee(newEmp);
  }

 

}


