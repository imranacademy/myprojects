import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CustomerRegistrationData } from 'src/app/shared/models/IUser';
import { OverviewService } from '../services/overview.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userDetails:CustomerRegistrationData;
  userAccounts: any[];
  error:any;
  totalLength:any;
  page:number = 1;

  constructor(private overviewService:OverviewService) { }

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'))[0];

    this.overviewService.getuseraccountsbalances( this.userDetails.loginName).subscribe((response)=>{
    this.userAccounts = response["data"]
    this.totalLength = response.length
    console.log(this.userAccounts)
    },
    (error:Response)=>{
    this.error = error["error"]["res"]["responseDescription"]
    });
  }

}
