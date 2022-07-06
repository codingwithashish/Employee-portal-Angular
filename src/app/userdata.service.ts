import { Injectable } from '@angular/core';
import { UseraddressService } from './useraddress.service';
@Injectable({
  providedIn: 'root'
})

export class UserdataService {
  address: string = '';
  constructor(private useradd: UseraddressService) {
    this.address = this.useradd.getuserAddress().address
  }

  getUserData() {
    return {
      name: 'ashish',
      domain: 'Frontend Developer',
      Addres: this.address
    }
  }
}
