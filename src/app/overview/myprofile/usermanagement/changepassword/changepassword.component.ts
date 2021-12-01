import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsermanagementService } from 'src/app/overview/services/usermanagement.service';
import { CustomerRegistrationData } from 'src/app/shared/models/IUser';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  userDetails:CustomerRegistrationData;
  loginActivity$ :Observable<any[]>;
  model = {
    loginName:'',
  oldPassword:'',
  newPassword:'', 
  confirmPassword:''
};
  constructor(private usermanagementService:UsermanagementService) { }

  ngOnInit() {
  }
  submit(){
    console.log()
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'))[0];
    this.model.loginName = this.userDetails.loginName;
    console.log(this.model)
   // console.log(this.userDetails)
   // form.value.regNumber = this.userDetails.debitCard;
  //console.log(form.value)
  this.usermanagementService.changePassword(this.model).subscribe(x=>console.log(x));
  }
}
