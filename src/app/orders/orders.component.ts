import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  address: any;
  retrievedData: any;
  buyerId: any;
  cartItems = [];
  cartId: any;
  total: any;
  images: any;
  orderId: any;
  cartStatus: any;
  orderDetails = Int16Array[4];
  cartUpdate = [];
  quantiyUpdate = [];
  productId: any;
  quantity: any;
  cartItem:any;

  

  constructor(private route:ActivatedRoute,private router: Router, private service: UserService) {
    this.cartItems = this.service.cartItems;
    this.address = {name: '', mobileNo: '', street: '', town: '', state: '', pinCode: '', country: ''};
   }
   getAddress(address) {
    localStorage.setItem('address',JSON.stringify(address));
    console.log(address);
    
    this.service.placeOrder(this.buyerId, this.address, this.total).subscribe((data:any) => {
    console.log('Order Placed!!');   
    this.router.navigate(['orderreceipt']); 
    });
     this.service.getCartItems(this.buyerId).then((result: any) => {
      console.log(result);
      this.retrievedData = localStorage.getItem('address');
      this.address = JSON.parse(this.retrievedData);
      this.buyerId = parseInt(localStorage.getItem('buyerId'));
      this.total = parseInt(localStorage.getItem('total'));
      for(let j = 0; j < result.length; j++){
        console.log(result[j]);
        if(result[j][2] === null){
          this.cartId = result[j][3];
          this.cartStatus = 'Ordered';
          this.cartUpdate = [this.cartId, this.cartStatus];
          this.service.updateCartStatus(this.cartUpdate).subscribe((data: any) => {
            console.log("Cart Status Updated");
          });
          
          this.productId = result[j][0];
          this.quantity = result[j][1];
          this.quantiyUpdate = [this.productId, this.quantity];
          this.service.quantityreduction(this.quantiyUpdate).subscribe((res: any) => {
            console.log("Quantity Reduced!!");
          });
        }
      }
      
     
       
    });
    
    
    
    

   
  }
  


  ngOnInit(): void {
    

    this.retrievedData = localStorage.getItem('address');
    this.address = JSON.parse(this.retrievedData);
    this.buyerId = parseInt(localStorage.getItem('buyerId'));
    this.total = parseInt(localStorage.getItem('total'));

}


}
