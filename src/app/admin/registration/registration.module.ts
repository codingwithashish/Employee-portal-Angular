import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const REGISTER_ROUTE: Routes = [{ path: '', component: RegistrationComponent }];

console.log('This is registration up component');

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(REGISTER_ROUTE)
  ]
})
export class RegistrationModule { }
