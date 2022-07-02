import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

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
    if (this.route.url == '/admin-profile' || this.route.url == '/logout' || this.route.url == '/timesheet' || this.route.url == '/report') {
      return false
    } else
      return true
  }
}
