import { Component, OnInit } from '@angular/core';
import { CustomerRegistrationData } from 'src/app/shared/models/IUser';
import { OverviewService } from '../services/overview.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  userDetails:CustomerRegistrationData;
  userWallets: any[];
  error:any;
  totalLength:any;
  page:number = 1;
  constructor(private overviewService:OverviewService) { }

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'))[0];
   const obj =  {
      "walletID": "",
      "cnic": this.userDetails.cnic
    }

    this.overviewService.GetWalletAccountsBalance(obj).subscribe((response:any)=>{
      this.userWallets = response["data"]["data"]
      //console.log(this.userWallets)
      this.totalLength = response.length
      },
      (error:Response)=>{
        console.log(error)
      this.error = error
      });
  }

}
