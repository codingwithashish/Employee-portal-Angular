import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router'

const LOGIN_ROUTE: Routes = [{ path: '', component: LoginComponent }]
console.log('Login module rendering');

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LOGIN_ROUTE)
  ]
})
export class LoginModule { }
