import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sellerprofile',
  templateUrl: './sellerprofile.component.html',
  styleUrls: ['./sellerprofile.component.css']
})
export class SellerprofileComponent implements OnInit {

  
  sellerId: any;
  seller: any;
  constructor(private router: Router,private service: UserService) { }

  ngOnInit(): void {
    this.sellerId = localStorage.getItem('sellerId');
    console.log(this.sellerId);

    this.service.sellerProfile(this.sellerId).subscribe((result: any) => { console.log(result); this.seller = result; });
    console.log(this.seller);
  }

  
  logoutUser(): void{
    this.service.setUserLoggedOut();
    this.service.authenticate();
    this.router.navigate(['home']);
  }

}
