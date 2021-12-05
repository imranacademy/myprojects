import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsermanagementService } from 'src/app/overview/services/usermanagement.service';
import { CustomerRegistrationData } from 'src/app/shared/models/IUser';

@Component({
  selector: 'app-useractivity',
  templateUrl: './useractivity.component.html',
  styleUrls: ['./useractivity.component.css']
})
export class UseractivityComponent implements OnInit {

  userDetails:CustomerRegistrationData;
  loginActivity:any[];
  totalLength:any;
  page:number = 1;


  constructor(private usermanagementService:UsermanagementService) { }

  ngOnInit() {
  }
  submit(form){
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'))[0];
   // console.log(this.userDetails)
    form.value.regNumber = this.userDetails.debitCard;
  //console.log(form.value)
  //this.http.userActivity(form.value).subscribe(x=>console.log(x));
   this.usermanagementService.userActivity(form.value).subscribe(response=>{
    this.loginActivity  = response
    this.totalLength = response.length
   });
  }

}
