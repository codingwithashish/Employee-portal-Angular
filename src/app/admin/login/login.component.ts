import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let logindetails = {
      name: 'Ashsih',
      password: '12345'
    }
    localStorage.setItem('username', JSON.stringify(logindetails));
  }

}
