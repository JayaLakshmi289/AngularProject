import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  productDetails=[];
  image: any;

  constructor(private router: Router, public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getForCart().subscribe(result => this.productDetails.push(result));
    this.image = {image1: 'assets/Images/logo.png'};
  }

  logoutUser(): void{
    this.userService.setUserLoggedOut();
    this.userService.authenticate();
    this.userService.userAuthenticate();
    this.userService.adminAuthenticate();
    this.userService.sellerAuthenticate();
    this.router.navigate(['home']);
  }
  validateUser(filled: any) {
    if (filled.search === 'login') {
     this.router.navigate(['login']);
    }
    else if (filled.search === 'home'){
      this.router.navigate(['home']);
    }
    else {
      alert('Invalid');
  }
  }

}
