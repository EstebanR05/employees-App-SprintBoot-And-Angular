import { Injectable } from '@angular/core';
import { Employees } from '../interface/employees-interface';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  public generalUrl: string = 'http://localhost:8001';

  constructor(private http: HttpClient) {}

  public getAllEmployees(): Observable<any> {
    const url = `${this.generalUrl}/employees`;
    return this.http.get<any>(url).pipe(map((data) => data));
  }

  public getByIdEmployee(id: number): Observable<any> {
    const url = `${this.generalUrl}/employees/${id}`;
    return this.http.get<any>(url).pipe(map((data) => data));
  }

  public saveEmployees(employees: Employees): Observable<any> {
    const url = `${this.generalUrl}/employees`;
    return this.http.post(url, { employees }).pipe(map((data) => data));
  }

  public setEmployees(id: number, employees: Employees): Observable<any> {
    const url = `${this.generalUrl}/employees/${id}`;
    return this.http.put(url, { employees }).pipe(map((data) => data));
  }

  public deleteEmployee(id: number): Observable<any> {
    const url = `${this.generalUrl}/employees/${id}`;
    return this.http.delete<any>(url).pipe(map((data) => data));
  }
}
