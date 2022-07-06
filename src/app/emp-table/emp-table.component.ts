import { Component, OnInit } from '@angular/core';
import { EmpdataService } from '../empdata.service';

@Component({
  selector: 'app-emp-table',
  templateUrl: './emp-table.component.html',
  styleUrls: ['./emp-table.component.css'],
  providers: [EmpdataService],
})

export class EmpTableComponent implements OnInit {
  empdatarecord: any = [];
  loader: boolean = false;
  constructor(private empdata: EmpdataService) {
    this.loader = true
    this.empdata.getempdata().subscribe(data => {
      if (data) {
        this.loader = false;
        this.empdatarecord = data;
      }
    });

  }
  ngOnInit(): void {
  }

  choise = "";
  chnageColor(data: any) {
    this.choise = data.target.value;
  }

}
