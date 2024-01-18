import { Injectable } from '@angular/core';
import { Employees } from '../interface/employees-interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  public generalUrl: string = 'localhost:8001';

  constructor(private http: HttpClient) {}

  public getAllEmployees() {
    const url = `${this.generalUrl}/employees`;
    return this.http.get<any>(url).pipe(map((data) => data));
  }

  public getByIdEmployee(id: number) {
    const url = `${this.generalUrl}/employees/${id}`;
    return this.http.get<any>(url).pipe(map((data) => data));
  }

  public saveEmployees(employees: Employees) {
    const url = `${this.generalUrl}/employees`;
    return this.http.post<any>(url, { employees });
  }

  public setEmployees(id: number, employees: Employees) {
    const url = `${this.generalUrl}/employees/${id}`;
    return this.http.put<any>(url, { employees });
  }

  public deleteEmployee(id: number) {
    const url = `${this.generalUrl}/employees/${id}`;
    return this.http.delete<any>(url);
  }
}
