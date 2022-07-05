import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-table',
  templateUrl: './emp-table.component.html',
  styleUrls: ['./emp-table.component.css']
})

export class EmpTableComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  emprecords = [
    {
      empname: 'Brady Ashish',
      empdomain: 'Angular Developer',
      empAge: 23,
      gender: 'Male',
      Salary: 10000,
      empAddress: 'Visthapit Rishikesh Uttarakhand'
    },
    {
      empname: 'Jason Harse',
      empdomain: 'Project Cordinator',
      empAge: 27,
      gender: 'Male',
      Salary: 350000,
      empAddress: 'Haldwani Uttarakhand'
    },
    {
      empname: 'Alex Anshuman',
      empdomain: 'Frontend',
      empAge: 22,
      gender: 'Male',
      Salary: 40000,
      empAddress: 'Haridwar Uttarakhand'
    },
    {
      empname: 'Preston Ujjwal',
      empdomain: 'Wordpress Developer',
      empAge: 24,
      gender: 'Male',
      Salary: 350000,
      empAddress: 'Saharanpur'
    }
  ]


  loadMoreData(): any {
    this.emprecords = [
      {
        empname: 'Brady Ashish',
        empdomain: 'Angular Developer',
        empAge: 23,
        gender: 'Male',
        Salary: 10000,
        empAddress: 'Visthapit Rishikesh Uttarakhand'
      },
      {
        empname: 'Jason Harse',
        empdomain: 'Project Cordinator',
        empAge: 27,
        gender: 'Male',
        Salary: 350000,
        empAddress: 'Haldwani Uttarakhand'
      },
      {
        empname: 'Alex Anshuman',
        empdomain: 'Frontend',
        empAge: 22,
        gender: 'Male',
        Salary: 40000,
        empAddress: 'Haridwar Uttarakhand'
      },
      {
        empname: 'Preston Ujjwal',
        empdomain: 'Wordpress Developer',
        empAge: 24,
        gender: 'Male',
        Salary: 350000,
        empAddress: 'Saharanpur'
      },
      {
        empname: 'Vince vijay',
        empdomain: 'Mobile Developer',
        empAge: 23,
        gender: 'Male',
        Salary: 310000,
        empAddress: 'IDPL Rishikesh Uttarakhand'
      },
      {
        empname: 'Zach Vaibhav',
        empdomain: 'Network & Support Engineer',
        empAge: 24,
        gender: 'Male',
        Salary: 230000,
        empAddress: ' Rishikul Haridwar Uttarakhand'
      },
      {
        empname: 'Kendrick Kashish',
        empdomain: 'UI/UX Designer',
        empAge: 25,
        gender: 'Male',
        Salary: 400000,
        empAddress: 'Shivalik Nagar Haridwar Uttarakhand'
      },
      {
        empname: 'Denver Manik',
        empdomain: 'Frontend Developer',
        empAge: 22,
        gender: 'Male',
        Salary: 100000,
        empAddress: 'Shivalik Nagar Haridwar Uttarakhand'
      },
      {
        empname: 'Harisson Harshit',
        empdomain: 'Frontend Developer',
        empAge: 22,
        gender: 'Male',
        Salary: 100000,
        empAddress: 'Shivalik Nagar Haridwar Uttarakhand'
      }
    ]
  }

  getTrack(item: any, data: any) {
    console.log(item)
    return data.empAge;
  }

  choise = "";

  chnageColor(data: any) {
    this.choise = data.target.value;
  }

}
