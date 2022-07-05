import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angulardemo';
  url: any;

  constructor(private route: Router) {

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
