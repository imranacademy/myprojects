import { Component, OnInit } from '@angular/core';
import { IdentityService } from 'src/app/identity/identity.service';
import { CustomerRegistrationData } from '../../models/IUser';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  accountTitle:string="";
  userDetails={} as CustomerRegistrationData;
  isUserLogedInTrue:boolean;

  constructor(private authService: IdentityService) { }

  ngOnInit() {
    console.log("ngOnInit");
    if(this.authService.isUserLoggedIn !==null){
      console.log("constructor");
      this.userDetails.loginName="jashdjkashkdj";
      try {
        
        this.userDetails = JSON.parse(localStorage.getItem('userDetails'))[0];

        this.accountTitle=this.userDetails.loginName;
        
     } catch (error) {
       
     }
    }
    this.isLoggedIn()
  }
  isLoggedIn(){
  this.isUserLogedInTrue =   this.authService.isUserLoggedIn();
  console.log(this.isUserLogedInTrue)
  }
}
