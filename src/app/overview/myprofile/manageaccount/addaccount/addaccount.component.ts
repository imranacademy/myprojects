import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { OverviewService } from 'src/app/overview/services/overview.service';
import { CustomerRegistrationData } from 'src/app/shared/models/IUser';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css']
})
export class AddaccountComponent implements OnInit {

  
  @ViewChild('f', {static: false}) f: NgForm;
  userDetails:CustomerRegistrationData;
  response$:Observable<any>;
  fetchTitle$:Observable<any>;
  accountTitle$:Observable<any>; 
  insertAccount$:Observable<any>;
  allAcount$:Observable<any>;
  removeA$:Observable<any>;
  model:any={}
  limit:any={} 
  loginName:string;
  title:any;
  show:any;
  selectIndex:number = null;
  allAcount:any;

  constructor(private overviewService:OverviewService) { }

  ngOnInit(): void {
  }
  AddAccountSubmit(f){
    const obj = {
      "loginName": this.loginName,
      "accountNumber": f.value.accountNumber
    }
   this.insertAccount$ =  this.overviewService.InsertCustomerAccount(obj); 
   this.insertAccount$.subscribe(x=> this.getAllAccounts())
   this.show = true;
  
  
  setTimeout(() => {
      console.log('timeout call')
      this.show = false
      this.f.resetForm();
  }, 3000);
  }
  fetchTitle(accountNumber){
    console.log(accountNumber.value)
    this.fetchTitle$ =   this.overviewService.AddAccountInquiry(accountNumber.value);
   }
  getAllAccounts(){
    const obj = {
        "loginName": this.loginName
      }
     this.overviewService.GetAllAccounts(obj).subscribe(x=>this.allAcount = x);
}
}
