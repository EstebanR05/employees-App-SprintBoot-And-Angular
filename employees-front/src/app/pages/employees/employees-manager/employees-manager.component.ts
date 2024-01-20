import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employees } from 'src/app/shared/interface/employees-interface';
import { EmployeesService } from 'src/app/shared/services/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employees-manager',
  templateUrl: './employees-manager.component.html',
  styleUrls: ['./employees-manager.component.scss'],
})
export class EmployeesManagerComponent implements OnInit {
  public form!: FormGroup;
  private id: string | null =
    this.activatedRoute.snapshot.paramMap.get('id') || null;

  constructor(
    public location: Location,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private employeesService: EmployeesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });

    if (this.id != null) {
      this.employeesService
        .getByIdEmployee(parseInt(this.id))
        .subscribe((employee: Employees) => {
          this.form.patchValue({
            name: employee.name,
            email: employee.email,
            phone: employee.phone,
          });
        });
    }
  }

  public save() {
    if (this.form.valid) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'se Guardo correctamente',
        showConfirmButton: false,
        timer: 1500,
      }).then((result) => {
        if (this.id == null) {
          this.employeesService.saveEmployees(this.form.value).subscribe();
        }

        if (this.id != null) {
          const employeeEdit: Employees = {
            id: parseInt(this.id),
            name: this.form.value.name,
            email: this.form.value.email,
            phone: this.form.value.phone,
          };

          this.employeesService
            .setEmployees(employeeEdit)
            .subscribe();
        }

        this.router.navigate(['/employees/list']);
      });
    }
  }

  public getControl(
    control: string,
    form: FormGroup = this.form
  ): AbstractControl {
    return form.controls[control];
  }
}
