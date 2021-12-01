import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsermanagementService } from 'src/app/overview/services/usermanagement.service';
import { CustomerRegistrationData } from 'src/app/shared/models/IUser';

@Component({
  selector: 'app-loginactivity',
  templateUrl: './loginactivity.component.html',
  styleUrls: ['./loginactivity.component.css']
})
export class LoginactivityComponent implements OnInit {

  userDetails:CustomerRegistrationData;
  loginActivity$ :Observable<any[]>;
  constructor(private http:UsermanagementService) { }

  ngOnInit() {
  }

  submit(form){
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'))[0];
   // console.log(this.userDetails)
    form.value.regNumber = this.userDetails.debitCard;
  //console.log(form.value)
  this.http.loginActivity(form.value).subscribe(x=>console.log(x))
  this.loginActivity$ =  this.http.loginActivity(form.value);
  }

}
