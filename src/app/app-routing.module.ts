import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'employee-table', component: EmpTableComponent },
  { path: 'employee-table', loadChildren: () => import('./emp-table/emp-table.module').then(m => m.EmpTableModule) },
  // { path: 'login', component: LoginComponent },
  { path: 'login', loadChildren: () => import('./admin/login/login.module').then(m => m.LoginModule) },

  // { path: 'register', component: RegistrationComponent },
  { path: 'registration', loadChildren: () => import('./admin/registration/registration.module').then(m => m.RegistrationModule) },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
