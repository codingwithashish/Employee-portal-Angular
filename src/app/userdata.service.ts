import { Injectable } from '@angular/core';
import { PhoneNumberService } from './phone-number.service';
import { UseraddressService } from './useraddress.service';
@Injectable({
  providedIn: 'root'
})

export class UserdataService {
  address: string = '';
  phone: any = '';

  constructor(private useradd: UseraddressService, private phonenumber: PhoneNumberService) {
    this.address = this.useradd.getuserAddress().address
    this.phone = this.phonenumber.getphoneNUmber().phone
  }

  getUserData() {
    return {
      name: 'Ashish',
      domain: 'Frontend Developer',
      Addres: this.address,
      phone: this.phone
    }
  }
}
