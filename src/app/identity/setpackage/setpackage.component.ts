import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OverviewService } from 'src/app/overview/services/overview.service';
import { CustomerRegistrationData } from 'src/app/shared/models/IUser';

@Component({
  selector: 'app-setpackage',
  templateUrl: './setpackage.component.html',
  styleUrls: ['./setpackage.component.css']
})
export class SetpackageComponent implements OnInit {
  userDetails:CustomerRegistrationData;
  response$:Observable<any>;
  selectIndex:number = null;
  model:any={}
  limit:any={} 
  allAcount:any;
  loginName:string;

  constructor(private overviewService:OverviewService,private router:Router) { }

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'))[0];
    console.log(this.userDetails.loginName)
    this.loginName = this.userDetails.loginName;
    this.getAllPackages();
    this.getAllAccounts();
  }

  changePackage(boxValue,i){
    this.selectIndex = i;
    this.response$.subscribe(x=>{
    this.limit =   x.filter(s => s.isSelected === true)
   });
  this.model = boxValue
  console.log(boxValue)
}

onChangePackage(val){
  console.log(val)
  }

  getAllAccounts(){
    const obj = {
        "loginName": this.loginName
      }
     this.overviewService.GetAllAccounts(obj).subscribe(x=>this.allAcount = x);
}

submit(value){
  console.log(this.limit)
  console.log(this.model)
  

      console.log(value.value.Category)
      console.log('less') 
      const changePackage = {
          "loginName":this.loginName,
          "updatePackage":this.model.totalLimit,
          "accountNumber":value.value.Category,
          "Otac":''
      }
      this.overviewService.setPackage(changePackage).subscribe(response=>{
          
         if(response){

           this.router.navigateByUrl('/overview/overview-tabs')
         }
         
      });


}
getAllPackages(){
  this.response$ =  this.overviewService.GetAallPackages(this.loginName);
   this.response$.subscribe(res=>{
      this.selectIndex =  res.findIndex(c=>c.isSelected===true);
      console.log(this.selectIndex)
  })
}

}
