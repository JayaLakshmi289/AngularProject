import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { NotificationService } from '../noification.service';

@Component({
  selector: 'app-regseller',
  templateUrl: './regseller.component.html',
  styleUrls: ['./regseller.component.css']
})
export class RegsellerComponent implements OnInit {
  address: any;
  sellerId: any;
  sellerdetails:any;
  constructor(private router: Router, private service: UserService, private notifyService: NotificationService) {

    this.sellerdetails={sellerName:'', sellerEmail:'', mobileNo:'', userName:'', password:'' , address:{street:'', city:'', state:'', pincode:''}};

  }

  ngOnInit(): void {

  }


  register(registerForm: any): void {
    this.service.registerSeller(this.sellerdetails).subscribe((result: any) => { console.log(result); } );
    //console.log(registerForm);
    console.log(this.sellerdetails);
    //alert("Registration success");
    this.router.navigate(['sellerlogin']);
  }
  showToasterSuccess(){
    this.notifyService.showSuccess("Registered successfully!!", "Registered")
}

showToasterError(){
    this.notifyService.showError("Something is wrong", "ItSolutionStuff.com")
}

showToasterInfo(){
    this.notifyService.showInfo("This is info", "ItSolutionStuff.com")

}

showToasterWarning(){
    this.notifyService.showWarning("This is warning", "ItSolutionStuff.com")
}
}


