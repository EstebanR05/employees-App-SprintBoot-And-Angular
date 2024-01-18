import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { EmployeesManagerComponent } from './employees/employees-manager/employees-manager.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeesManagerComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PagesModule { }
