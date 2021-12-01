import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  baseUrl = environment.apiUrl;
  
  constructor(private http:HttpClient) { }

  getuseraccountsbalances(username):Observable<any[]> {
    const body = { loginname: username }
    return this.http.post<any[]>(this.baseUrl +"UserDetail/GetUserAccountsWithBalance",body);
  };

  getuserAllAccounts(loginName):Observable<any[]> {
    const body = { loginName: loginName }
    return this.http.post<any[]>(this.baseUrl +"UserDetail/GetAllAccounts",body).pipe(map(x=>x["data"]))
    ;
  };

  getUsersDetails(obj:any){

      var obj1 ={
      "accountNumber": obj.accountNumber,
      "overviewType": 0,
      "toDate":  obj.toDate,
      "fromDate": obj.fromDate
    }
    return this.http.post(this.baseUrl +'UserDetail/GetAccountStatement',obj1)
  }

  AddAccountInquiry(account){
    return this.http.get(`${this.baseUrl}UserManagement/AddAccountInquiry?accno=${account}`)
   }
   
  InsertCustomerAccount(obj:any){
    return this.http.post(this.baseUrl+"UserManagement/InsertCustomerAccount",obj)
   }
 
   GetAllAccounts(obj){
    return this.http.post(this.baseUrl+"UserDetail/GetAllAccounts",obj).pipe(map(x=>x["data"]))
   }
 
 
   RemoveCustomerAccount(obj){
     return this.http.post(this.baseUrl +"UserManagement/RemoveCustomerAccount",obj)
   }

   GetAallPackages(username:any){
    return this.http.get(`${this.baseUrl}ChangePackage/GetAllPackages?loginName=${username}`)
    .pipe(
      map((res)=>{
        return res["allCategories"]
      })
    );
  }
  ChangePackage(body){
    return  this.http.post(this.baseUrl +"ChangePackage/ChangePackage",body)
  }
  GenerateOtac(){
  return this.http.get(this.baseUrl +"ChangePackage/GenerateOtac");
  }

  GetCreditCardsByCnic(obj){
    return this.http.post(this.baseUrl +"UserDetail/GetCreditCardsByCnic",obj)
    }
}
