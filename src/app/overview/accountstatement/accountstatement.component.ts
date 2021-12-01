import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerRegistrationData } from 'src/app/shared/models/IUser';
import { OverviewService } from '../services/overview.service';

@Component({
  selector: 'app-accountstatement',
  templateUrl: './accountstatement.component.html',
  styleUrls: ['./accountstatement.component.css']
})
export class AccountstatementComponent implements OnInit {

  sumary$:Observable<any>;
  userDetails:CustomerRegistrationData;
  userAcc$: Observable<any[]>;
  http$: Observable<any[]>;
  usesAccountDetaiList=[];
  data:string;
   msg: string;
  constructor(private overviewService:OverviewService) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'))[0];
    console.log(this.userDetails.loginName);

    this.http$ = this.overviewService.getuserAllAccounts(this.userDetails.loginName);
   
  }
  submit(f){
    console.log(f.value);


    this.sumary$ = this.overviewService.getUsersDetails(f.value);
  }

}
