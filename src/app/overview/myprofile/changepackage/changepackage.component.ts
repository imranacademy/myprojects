import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerRegistrationData } from 'src/app/shared/models/IUser';
import { OverviewService } from '../../services/overview.service';

@Component({
  selector: 'app-changepackage',
  templateUrl: './changepackage.component.html',
  styleUrls: ['./changepackage.component.css']
})
export class ChangepackageComponent implements OnInit {

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
  
  if(+this.limit[0].totalLimit < +this.model.totalLimit){
      console.log('ok')
      this.overviewService.GenerateOtac().subscribe({
         next:(res)=>{
              console.log(`service response : ${res}`)
             if(res){
              const changePackage = {
                  "loginName":this.loginName,
                  "updatePackage":this.model.totalLimit,
                  "accountNumber":value.value.Category,
                  "Otac":''
              }
              localStorage.setItem('otacvalue',JSON.stringify(changePackage));
              this.router.navigate(['/otac'])

              console.log('ok')
          }
         },
         error:({error})=>{
         console.log(error.response.responseCode)
         console.log(error.response.responseDescription)
         }
       
      })

  }
  else if(this.limit[0].totalLimit === this.model.totalLimit)
  {
     
      console.log('u already have this package')
      
  }else{
      console.log(value.value.Category)
      console.log('less') 
      const changePackage = {
          "loginName":this.loginName,
          "updatePackage":this.model.totalLimit,
          "accountNumber":value.value.Category,
          "Otac":''
      }
      this.overviewService.ChangePackage(changePackage).subscribe(x=>{
          console.log(x)
          this.getAllPackages();
  
      });
      console.log(changePackage)
  }
}
getAllPackages(){
  this.response$ =  this.overviewService.GetAallPackages(this.loginName);
   this.response$.subscribe(res=>{
      this.selectIndex =  res.findIndex(c=>c.isSelected===true);
      console.log(this.selectIndex)
  })
}
}
