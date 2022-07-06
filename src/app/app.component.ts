import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UserdataService } from './userdata.service';
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
}
