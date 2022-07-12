import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmpTableComponent } from './emp-table.component'
import { NgxPaginationModule } from 'ngx-pagination'
console.log('this is emp table module');
const EMP_ROUTE: Routes = [{ path: '', component: EmpTableComponent }];
@NgModule({
  declarations: [
    EmpTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(EMP_ROUTE),
    NgxPaginationModule
  ]
})
export class EmpTableModule { }
