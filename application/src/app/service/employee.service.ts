import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Employee} from '../model/Employee';
import {Http,RequestOptions,Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employee = new Subject<Employee>();
  obs = this.employee.asObservable();
  constructor(private http:Http) { }

  addEmployee(emp:Employee){ // from Form creator will send data
    this.employee.next(emp);
  }
  saveToDB(employees:Employee[]){
    // API call 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:8080/company/create/employee',employees,options).subscribe(resp=> console.log(resp));
  }

}
