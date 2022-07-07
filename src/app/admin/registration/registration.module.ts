import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RouterModule, Routes } from '@angular/router';

const REGISTER_ROUTE: Routes = [{ path: ' ', component: RegistrationComponent }];

console.log('This is Signup Component');

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(REGISTER_ROUTE)
  ]
})
export class RegistrationModule { }
