import { Injectable } from '@angular/core';
import { PhoneNumberService } from './phone-number.service';


// @Injectable({
//   providedIn: 'root'
// })

@Injectable() // we used this method before angular 6 version
export class UseraddressService {
  constructor() {

  }

  getuserAddress() {
    return {
      address: 'Rishikesh'
    }
  }
}
