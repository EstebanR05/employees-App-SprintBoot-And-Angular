import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { EmployeesManagerComponent } from './employees/employees-manager/employees-manager.component';

const routes: Routes = [
  {
    path: 'employees',
    children: [
      { path: 'list', component: EmployeesListComponent },
      { path: 'create', component: EmployeesManagerComponent },
      { path: 'edit/:id', component: EmployeesManagerComponent },
      {path: '**', redirectTo: 'list'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
