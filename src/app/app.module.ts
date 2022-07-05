import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgModuleDirective } from './footer/ng-module.directive';
import { EmpTableComponent } from './emp-table/emp-table.component';
import { LoginComponent } from './admin/login/login.component';
import { RegistrationComponent } from './admin/registration/registration.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HeaderComponent,
    FooterComponent,
    NgModuleDirective,
    EmpTableComponent,
    LoginComponent,
    RegistrationComponent,
    NotFoundComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
