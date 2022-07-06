import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpdataService {

  constructor(private http: HttpClient) {

  }

  getempdata() {
    let apiurl = 'https://jsonplaceholder.typicode.com/users';
    return (this.http.get(apiurl))
  }
}
