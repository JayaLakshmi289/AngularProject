import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from './../user.service';
import { ViewChild,ElementRef } from '@angular/core'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user: any;

  loading = false;
  
  currentUrl: any;
  num: any;
  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
  auth2: any;

  constructor(private route:ActivatedRoute, private router: Router, private service: UserService) {
    this.user = {userName: '', password: ''};

  }
  ngOnInit() {



    this.googleInitialize();
   console.log(this.router.url);
   console.log( window.location.href);
  }

  //LoginForm():void{
    //console.log(this.user);
  //}

  
  async validateUser(loginForm: any) {
    if (loginForm.emailId === 'admin' && loginForm.password === 'admin') {
      this.service.setUserLoggedIn();
      this.service.adminDeauthenticate();
      this.service.userAuthenticate();
      this.service.sellerAuthenticate();
      this.service.deauthenticate();
      this.router.navigate(['admin']);
    }
    else {
      await this.service.userLogIn(loginForm.emailId, loginForm.password).then((data: any) => {
        if (data != null) {
          this.service.setUserLoggedIn();
          this.service.deauthenticate(); 
          this.service.userDeauthenticate();

          //
          let no = parseInt(this.route.snapshot.paramMap.get('no'));
          console.log(no);
          this.num = no;
          //
          
          localStorage.setItem('buyerId', JSON.stringify(data.buyerId));
          localStorage.setItem('buyer', JSON.stringify(data));
          

         /* this.currentUrl = localStorage.getItem('currentUrl');
          console.log(this.currentUrl);
          this.router.navigate([this.currentUrl]); */

          if(this.num === 1) {
            this.router.navigate(['home']);
          }
          else {
            this.currentUrl = localStorage.getItem('currentUrl');
            this.router.navigate([this.currentUrl]);
          }

        } else {
        }
      },
      (error) => {

      });
  }
}
googleInitialize() {
  window['googleSDKLoaded'] = () => {
    window['gapi'].load('auth2', () => {
      this.auth2 = window['gapi'].auth2.init({
        client_id: '731136061386-91ptjvgo3ciai6t70d2bf8tffupjo990.apps.googleusercontent.com',
        cookie_policy: 'single_host_origin',
        scope: 'profile email'
      });
      this.prepareLogin();
    });
  }
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'google-jssdk'));
}

prepareLogin() {
  this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
    (googleUser) => {
      let profile = googleUser.getBasicProfile();
      console.log('Token || ' + googleUser.getAuthResponse().id_token);
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
      //this.router.navigate(['/home']);
      
    }, (error) => {
      alert(JSON.stringify(error, undefined, 2));
    });
}


}