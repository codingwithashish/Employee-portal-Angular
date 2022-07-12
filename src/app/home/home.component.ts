import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

    var admindata: any = localStorage.getItem('username')
    var admindatame: any = JSON.parse(admindata);
    console.log(admindatame.name + admindatame.password);
  }


}
