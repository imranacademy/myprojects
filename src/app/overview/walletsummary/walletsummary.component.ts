import { Component, OnInit } from '@angular/core';
import { IWalletSummary } from 'src/app/shared/models/IWalletSummary';
import { OverviewService } from '../services/overview.service';

@Component({
  selector: 'app-walletsummary',
  templateUrl: './walletsummary.component.html',
  styleUrls: ['./walletsummary.component.css']
})
export class WalletsummaryComponent implements OnInit {
 wallet :IWalletSummary;

  constructor(private overviewService:OverviewService) { }

  ngOnInit(): void {
   this.wallet =  history.state;
 
  }
  submit(form:any){

    const obj = {
      "clientCode": this.wallet.clientCode,
      "fromDate": form.value.fromDate,
      "toDate": form.value.toDate,
      "accReference": this.wallet.accountReference,
    }

     this.overviewService.GetWalletStatements(this.wallet)
     .subscribe(x=>console.log(x))
  }

}
