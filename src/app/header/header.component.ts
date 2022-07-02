import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  inputtext = '';
  mytext() {
    alert();
  }

  formSubmit(formdata: any) {
    let data = formdata.control
    alert(`Nmae : ${data.value.name} Age : ${data.value.age} Domain : ${data.value.domain} Salary : ${data.value.salary} Address : ${data.value.address}`);
  }
}
