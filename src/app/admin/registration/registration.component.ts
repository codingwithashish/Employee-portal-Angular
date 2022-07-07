import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // constructor() { }



  ngOnInit(): void {
  }

  // registrationForm = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // })

  // formSubmit(data: any) {
  //   let username = data.name;
  //   alert(`Name : ${data.name} Age: ${data.email}`)
  // }

  // Using form builder
  // registrationForm: FormGroup;
  // constructor(private formbuilder: FormGroup) {

  //   this.registrationForm = this.formbuilder.group({
  //     name: [''],
  //     email: [''],
  //     password: [''],
  //   })
  // }

  // formSubmit(data: any) {
  //   let username = data.name;
  //   alert(`Name : ${data.name} Age: ${data.email}`)
  // }

}
