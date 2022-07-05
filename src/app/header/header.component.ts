import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  inputtext = '';
  genders: any = [];
  selectdomain: any = [];

  constructor() { }

  ngOnInit() {
    this.genders = ['Male', 'Female', 'Other'];
    this.selectdomain = ['Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'Quality Assurance', 'Angular Developer', 'React Developer', 'Mobile Developer', 'Project Cordinator', 'Network & Support Engineer', 'Wordpress Developer'];
  }


  mytext() {
    alert();
  }
  formSubmit(formdata: any) {
    let data = formdata.control
    alert(`Nmae : ${data.value.name} Age : ${data.value.age} Domain : ${data.value.domain} Salary : ${data.value.salary} Address : ${data.value.address} gender : ${data.value.gender}`);
  }
}
