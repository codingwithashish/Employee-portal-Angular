import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseraddressService {

  constructor() { }

  getuserAddress() {
    return {
      address: 'Rishikesh'
    }
  }
}
