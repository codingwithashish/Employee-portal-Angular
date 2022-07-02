import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpTableComponent } from './emp-table/emp-table.component';
import { LoginComponent } from './admin/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './admin/registration/registration.component';

const routes: Routes = [
  { path: '', component: EmpTableComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
