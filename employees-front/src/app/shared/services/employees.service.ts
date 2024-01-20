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

  public getAllEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(`${this.generalUrl}/employees`).pipe(map((data) => data));
  }

  public getByIdEmployee(id: number): Observable<Employees> {
    return this.http.get<Employees>(`${this.generalUrl}/employees/${id}`).pipe(map((data) => data));
  }

  public saveEmployees(employees: Employees): Observable<Employees> {
    return this.http.post<Employees>(`${this.generalUrl}/employees`, employees);
  }

  public setEmployees(employees: Employees): Observable<Employees> {
    return this.http.put<Employees>(`${this.generalUrl}/employees`, employees );
  }

  public deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.generalUrl}/employees/${id}`);
  }
}
