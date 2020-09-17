import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /*constructor(){}
  //constructor(private router: Router, private userService: UserService) { }


  ngOnInit(): void {
  }
  */

  
 products: any;
  constructor() { }

  ngOnInit(): void {
    this.products = [
      {id: 1001, name: 'Water-based pen', description: '1pcs ballpoint pen stationery shop 0.7mm black ink pen office business water-based pen school supplies metal gifts',
       price: 20.00,  imagePath: 'assets/Images/10001.jpg'},
       {id: 1002, name: 'Dream Catcher', description: 'This is a glass jar show piece which has a beautiful white feather dream catcher inside.', price: 299.99,
       imagePath: 'assets/Images/10002.jpg'},
       {id: 1003, name: 'Diary With Warli Art', description: 'Get your hands on this enticing diary which is adorned with beautiful Warli Art ', price: 199.00,
       imagePath: 'assets/Images/10003.jpg'},
       {id: 1004, name: 'Solid Pink Mug', description: 'Pure Ceramic Coffee mug of baby pink color ',
       price: 400.00, imagePath: 'assets/Images/10004.jpg'},
       {id: 1005, name: 'Swingline Stapler', description: 'Commercial Desktop Stapler,Portable, Durable Metal Desktop Stapler for Home Office Supplies, Classroom or Desktop Accessories', price: 119.99,
       imagePath: 'assets/Images/10005.jpg'},
       {id: 1006, name: 'Molang Lovely Cute Water Bottle', description: 'Transparent like glass .Splash guard included', price: 259.99,
       imagePath: 'assets/Images/10006.jpg'},
       {id: 1007, name: 'Dream Catcher Evil Eye Keychain', description: 'Send your loved one this amazing keychain as a gift from your end.', price: 199.99,
       imagePath: 'assets/Images/10007.jpg'}
      ];
  }
}














