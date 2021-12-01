import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { UsermanagementService } from 'src/app/overview/services/usermanagement.service';
import { CustomerRegistrationData } from 'src/app/shared/models/IUser';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  userDetails:CustomerRegistrationData;
  email:any;
  response$:Observable<any>;
  constructor(private usermanagementService:UsermanagementService) {
    
   }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'))[0];
    this.email = this.userDetails.email;
    this.userDetails.securityQ = "Option1";
  }
  submit(f:NgForm){

    this.userDetails = JSON.parse(localStorage.getItem('userDetails'))[0];
    console.log(this.userDetails)
    f.value.regNumber = this.userDetails.debitCard;
    console.log(f.value)
   this.response$ =  this.usermanagementService.UpdateProfile(f.value);
  }

}
