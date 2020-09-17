import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styles: [
  ]
})
export class SellerComponent implements OnInit {
image:any;
  constructor() {
    
   }

  ngOnInit(): void {
    this.image= {image1:'assets/Images/myproducts.jpeg', image2:'assets/Images/new product.jpeg'};
  }

}
