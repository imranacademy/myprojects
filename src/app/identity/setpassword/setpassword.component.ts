import { Component, OnInit } from '@angular/core';
import { CustomerRegistrationData } from 'src/app/shared/models/IUser';
import { IdentityService } from '../identity.service';

@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.css']
})
export class SetpasswordComponent implements OnInit {
  userDetails:CustomerRegistrationData;
  constructor(private identityService:IdentityService) { }

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'))[0];
  }
  submit(form){
    form.value.loginName = this.userDetails.loginName
   this.identityService.setPassword(form.value).subscribe(x=>{
       this.identityService.logOut();
   })
  }
}
