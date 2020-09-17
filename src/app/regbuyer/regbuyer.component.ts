import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { NotificationService } from '../noification.service';

@Component({
  selector: 'app-regbuyer',
  templateUrl: './regbuyer.component.html',
  styleUrls: ['./regbuyer.component.css']
})
export class RegbuyerComponent implements OnInit {

  buyerdetails:any;
  mobileNo: any;
  constructor(private router: Router, private service: UserService, private notifyService: NotificationService) {
  
   this.buyerdetails={buyerId:'', buyerName:'', buyerEmail:'', mobileNo:'', userName:'', password:'' };
  }

  ngOnInit(): void {

  }
  
  register(registerForm: any): void {
    this.service.registerBuyer(this.buyerdetails).subscribe((result: any) => { console.log(result); } );
    
    //console.log(registerForm)
    console.log(this.buyerdetails);
    //alert("Registration success");
    this.router.navigate(['login','1']);
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



getMobileNo(buyerdetails) {
  console.log(buyerdetails.mobileNo);
  this.mobileNo = buyerdetails.mobileNo;
  console.log(this.mobileNo);
  this.service.getBuyerMobile(this.mobileNo).subscribe((result: any) => { console.log(result); } );
}
}
  
