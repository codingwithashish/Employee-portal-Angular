import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from './userdata.service';

interface EmployeeInterface {
  name: string,
  age: number,
  domain: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Admin Employee Portal';
  url: any;

  constructor(private route: Router, private getuserdata: UserdataService) {
    let userdata = this.getuserdata.getUserData();
    console.log(userdata);
  }

  ngOnInit(): void {
  }

  getRoute() {
    if (this.route.url == '/logout') {
      return false
    } else {
      return true
    }
  }

  getempdata() {
    let emprecods: EmployeeInterface = {
      name: ' ',
      age: 24,
      domain: 'FE'
    }
  }
}
