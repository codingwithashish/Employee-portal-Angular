import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  users = {
    name: '',
    email: '',
    password: ''
  }
  RegistrationForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),

  })

  formSubmit(data: any) {
    console.log(data);
  }

  ngOnInit(): void {
  }

}
