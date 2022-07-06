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
  constructor(private empdata: EmpdataService) {
    this.empdata.getempdata().subscribe(data => {
      this.empdatarecord = data;
      console.log(this.empdatarecord);
    });

  }
  ngOnInit(): void {
  }

  choise = "";
  chnageColor(data: any) {
    this.choise = data.target.value;
  }

}
