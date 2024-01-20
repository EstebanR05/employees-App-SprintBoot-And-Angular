import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/shared/interface/employees-interface';
import { EmployeesService } from 'src/app/shared/services/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit {
  public listEmployees: Employees[] = [];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.getAll();
  }

  public getAll() {
    this.employeesService.getAllEmployees().subscribe(
      (employee: Employees[]) => {
        this.listEmployees = employee;
      },
      (error) => {
        console.log('error getEmployee-> ', error);
      }
    );
  }

  public deleteEmployee(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeesService.deleteEmployee(id).subscribe();
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });

    this.getAll();
  }
}
