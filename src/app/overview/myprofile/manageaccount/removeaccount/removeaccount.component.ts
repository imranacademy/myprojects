import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OverviewService } from 'src/app/overview/services/overview.service';
import { CustomerRegistrationData } from 'src/app/shared/models/IUser';

@Component({
  selector: 'app-removeaccount',
  templateUrl: './removeaccount.component.html',
  styleUrls: ['./removeaccount.component.css']
})
export class RemoveaccountComponent implements OnInit {

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
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'))[0];
    console.log(this.userDetails.loginName)
    this.loginName = this.userDetails.loginName;
    this.getAllAccounts();
  }
  getAllAccounts(){
    const obj = {
        "loginName": this.loginName
      }
     this.overviewService.GetAllAccounts(obj).subscribe(x=>this.allAcount = x);
}
removeAccount(removeForm){

  const obj = {
      "loginName": this.loginName,
      "accountNumber": removeForm.value.removeaccount
    }
    console.log(obj)
   this.removeA$ =  this.overviewService.RemoveCustomerAccount(obj).pipe(map(x=>{
      this.getAllAccounts()
      return x["response"]
  }))
  console.log("call getAllAccounts")
  
  console.log("after remove method")
 
  setTimeout(() => {
      console.log("after remove method null call")
      this.removeA$ = null;
  }, 3000);

  // this.removeA$.subscribe(x=>this.getAllAccounts())
 // this.getAllAccounts(); 
}
onChange(val){
  this.accountTitle$ = this.overviewService.AddAccountInquiry(val.value).pipe(map(res=>{
     return res["objTitle"]
  }))
}

}
