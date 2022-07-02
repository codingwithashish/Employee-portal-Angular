import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = 'Rowthtech'

  isDisballed = true;
  isloginusers = false

  getuserdata() {
    return this.name;
  }

  alertBox(paragraph: any) {
    alert(paragraph);
  }

  keyupmethod(para: any) {
    return alert(para);
  }

  // runtimetext(data: any) {
  //   alert(data);
  // }
}
