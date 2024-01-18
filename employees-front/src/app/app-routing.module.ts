import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'employees', loadChildren: ()=> import('./pages/pages-routing.module').then(m => m.PagesRoutingModule)},
  {path: '**', redirectTo: 'employees'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
