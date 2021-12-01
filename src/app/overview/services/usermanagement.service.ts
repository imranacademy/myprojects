import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {
baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  UpdateProfile(body:any){


     return this.http.post(this.baseUrl+'UserManagement/UpdateProfile',body)
     .pipe(map(x=>{
       return x["response"]["responseDescription"];
     }));
   }

  loginActivity(val){
    console.log(val.formdate)
    console.log(val.formdate)
    let params= new HttpParams();
  
   params =  params.append('regNumber',val.regNumber)
   params =  params.append('fromDate',val.fromDate)
   params =  params.append('toDate',val.toDate)
   console.log(params)
   return this.http.get(this.baseUrl+'UserManagement/LoginActivity',{params}).pipe(map(res=>{
     return res["loginActivity"];
   }));
    
  }

  userActivity(val){
    console.log(val)

    let params= new HttpParams();
  
   params =  params.append('regNumber',val.regNumber)
   params =  params.append('fromDate',val.fromDate)
   params =  params.append('toDate',val.toDate)
   console.log(params)
   

   return this.http.get(this.baseUrl+'UserManagement/UserActivity',{params}).pipe(map(res=>{
     return res["userActivity"];
   }));
    
  }

  changePassword(f){
   var obj = {
    "loginName": f.loginName,
    "oldPassword": f.oldPassword,
    "newPassword": f.newPassword,
   }
   return this.http.post(this.baseUrl+'UserManagement/ChangePassword',obj);
  }
}
