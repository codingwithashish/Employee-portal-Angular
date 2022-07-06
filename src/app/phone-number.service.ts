import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PhoneNumberService {

  constructor() { }

  getphoneNUmber() {
    return {
      phone: 1234567890
    }
  }
}
