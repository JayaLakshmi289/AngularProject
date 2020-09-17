import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.css']
})
export class CartDisplayComponent implements OnInit {
  buyerId: any;
  productDetails: any;
  cart: any;
  allTotal: any;
  cartList = [];
  address: any;
  id: any;


  constructor(private service: UserService, private router: Router ) {
    this.address = {name: '', mobileNo: '', street: '', town: '', state: '', pinCode: '', country: ''};
   // this.cart = {cartId:'', product: {productId:'', productName: '', imageName: '', productType: '', productBrand: '', productPrice: '', availability: '', description: ''}, quantity:''};
   }

  async ngOnInit(): Promise<void> {
    this.buyerId = parseInt(localStorage.getItem("buyerId"));
    await this.service.getCartItems(this.buyerId).then((result: any) => {
      console.log(result);
      for(let i = 0; i < result.length; i++){
        if(result[i][2] === null){
          console.log(result[i]);
          this.service.getProductById(result[i][0]).subscribe((data: any) =>{
            console.log(data);
            this.productDetails = data;
            this.cart = {quantity: result[i][1], product: this.productDetails, cartId: result[i][3]};
            console.log(this.cart);
            this.cartList.push(this.cart);
        
          });        
        }
      }
      localStorage.setItem('cartList', JSON.stringify(this.cartList));
    });
    this.calculateAllTotal(this.cartList);
    this.allTotal = parseInt(localStorage.getItem('total'));
    console.log(this.cartList);
  }

  calculateAllTotal(orderDetails: any[]) {
    let total = 0;
    console.log(this.cartList);
    console.log(orderDetails);
    this.cartList = JSON.parse(localStorage.getItem('cartList'));
    for(let i = 0; i < this.cartList.length; i++) {
    //for(let i in orderDetails) {
      total = total +  (this.cartList[i].product.productPrice * this.cartList[i].quantity);
      console.log(total);
    }
    this.allTotal = total;
    localStorage.setItem('total', JSON.stringify(this.allTotal));
    console.log(this.allTotal);
  }
  getAddress(address) {
    localStorage.setItem('address',JSON.stringify(address));
    this.router.navigate(['/orders']);
    console.log(address);
  }

  deleteCartItem(productDetails: any){
    console.log(productDetails);
    this.service.deleteCartItem(productDetails.cartId).subscribe((data: any) => {
      console.log("CartItem Deleted!!");
      this.removeItem(productDetails);
    });
    
  }
    
  removeItem(cartItem: any){
    this.cartList = this.cartList.filter(item => item !== cartItem);
 }    

  }

  
