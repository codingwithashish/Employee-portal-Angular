import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
const ABOUT_ROUTE: Routes = [{ path: '', component: AboutComponent }]
console.log('about module is runnig here');
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ABOUT_ROUTE)
  ]
})
export class AboutModule { }
