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
  data: any = '';
  loader: boolean = true;
  pagination: boolean = false;
  constructor(private empdata: EmpdataService) {
    this.empdata.getempdata().subscribe(data => {
      if (data) {
        this.loader = false;
        this.pagination = true;
        this.empdatarecord = data;
      }
    });
  }
  ngOnInit(): void {
  }
}
