import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  // productdetails=[]
  constructor() { }

  ngOnInit(): void {
  }

  isuserLogin = true;

 productdetails = [
   {
    productName :'product1',
    desc : 'Some quick example text to build on the card title and make up the bulk of the card',
    productimg : 'https://www.fillmurray.com/640/360',
   },
   {
    productName :'product2',
    desc : 'Some quick example text to second box build on the card title and make up the bulk of the  second box card',
    productimg : 'https://www.fillmurray.com/640/370',
   },
   {
    productName :'product3',
    desc : 'Some quick example text to kjdsfhdfj kjdfjh build on the card title and make up the bulk of the  jfdhj card',
    productimg : 'https://www.fillmurray.com/640/390',
   },
   {
    productName :'product4',
    desc : 'Some quick example text to kjdsfhdfj kjdfjh build on the card title and make up the bulk of the  jfdhj card',
    productimg : 'https://www.fillmurray.com/640/400',
   }
 ]
}
