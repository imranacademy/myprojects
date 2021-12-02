import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, ReplaySubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {IUser} from '../shared/models/IUser';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<IUser>(1);
  currentUser$ = this.currentUserSource.asObservable();
  
  constructor(private http:HttpClient,private router: Router) { }
  loadCurrentUser(token: string) {
    if (token === null) {
      this.currentUserSource.next(null);
      return of(null);
    }

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(this.baseUrl + 'account', {headers}).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('token', user.data.token);
          this.currentUserSource.next(user);
        }
      })
    );
  }

  login(values: any) {
    const username = values.uname;
    const password = values.password;
    console.log(username);
    console.log(password);
    return this.http.get<IUser>(`${this.baseUrl}login/UserValidate?username=${username}&password=${password}`).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('userDetails', JSON.stringify( user.data.data[0].customerRegistrationData));
          localStorage.setItem('userMenu', JSON.stringify(user.data.data[0].userMenu));
          localStorage.setItem('token', user.data.token);
          this.currentUserSource.next(user);
        }
      })
    );
  }
  isUserLoggedIn() {
    let user = localStorage.getItem('userDetails')
    //let user =sessionStorage.getItem('username');
    return !(user === null)
  }

  checkUserName(val :string){
    return this.http.get(`${this.baseUrl}Registration/UserAvailable?username=${val}`)
    .pipe(map(res=>{
       let isExist =  res["rspuserexist"]['count'] == 1
        if(isExist){
          return true;
        }else{
          return false;
        }
    }))
  }

  registerUser(val:any):Observable<any>{
    //  console.log(val)
     let obj =  {
        "userchk": 0,
        "regNumber": val.accountnumber,
        "cnic": val.cnic,
        "email": val.email,
        "passport": val.passport,
        "mobnum": val.mobilenumber,
        "dob": val.dateofbirth,
        "carrier":  val.carrier,
        "username":  val.username,
        "securityquestion":  val.securityquestion,
        "securityanswer": val.securityanswer
      }
      console.log(obj)
     
      return this.http.post(`${this.baseUrl}Registration/AccountRegistration`,obj)
      .pipe(
        map(x=>{ return x['regCode']})
      );
    }
  
    registerUseCreditCard(val:any){
      console.log(val)
      let obj =  {
        "userchk": 0,
        "regNumber": val.creditcard,
        "cnic": val.cnic,
        "email": val.email,
        "mobnum": val.mobilenumber,
        "dob": val.dateofbirth,
        "carrier":  val.carrier,
        "username":  val.username,
        "securityquestion":  val.securityquestion,
        "securityanswer": val.securityanswer
      }
      console.log(obj)
      return this.http.post(`${this.baseUrl}Registration/CreditCardRegistration`,obj)
      .pipe(
        map(x=>{
          if (x!=null) {
            return x['regCode']
          }
          else{
             return null;
          }
        
          })
      );
     
    }
  
    registerUseDeditCard(val:any){
     // console.log(val)
      let obj =  {
        "userchk": 0,
        "regNumber": val.debitcard,
        "cnic": val.cnic,
        "email": val.email,
        "passport":"",
        "mobnum": val.mobilenumber,
        "dob": val.dateofbirth,
        "carrier":  val.carrier,
        "username":  val.username,
        "securityquestion":  val.securityquestion,
        "securityanswer": val.securityanswer
      }
      console.log("from service"+ obj)
      return this.http.post(`${this.baseUrl}Registration/DebitCardRegistration`,obj) .pipe(
        map(x=>{
          if (x!=null) {
            return x['regCode']
          }
          else{
             return null;
          }
        
          })
      );
    }

    setPassword(obj){
     return this.http.post(this.baseUrl+"UserManagement/SetPassword",obj);
    }

    logOut() {
      localStorage.removeItem('userMenu');
      localStorage.removeItem('userDetails');
      localStorage.removeItem("token");
      this.currentUserSource.next(null);
      this.router.navigateByUrl('/');
    }
}
