import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { validateUsernameNotTaken } from '../../custom-validators/validateUsernameNotTaken';
import { IdentityService } from '../../identity.service';

@Component({
  selector: 'app-creditcardcustomers',
  templateUrl: './creditcardcustomers.component.html',
  styleUrls: ['./creditcardcustomers.component.css']
})
export class CreditcardcustomersComponent implements OnInit {

  emailAlredyExist$:Observable<any>;
  userNamecheck ="";
  res$:Observable<any>;
  randomText = this.getRandomString();
  form:FormGroup;
  constructor(private http:IdentityService,private fb:FormBuilder) { }

  one="1";

  ngOnInit() {

    this.form = this.fb.group({
      creditcard:['',Validators.required],
      cnic:['',Validators.required],
      mobilenumber:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      dateofbirth:['',Validators.required],
      carrier:[null,Validators.required],
      username:['',Validators.required,validateUsernameNotTaken(this.http)],
      captcha:['',[Validators.required,Validators.minLength(6)], this.shouldBeUnique.bind(this)],
      securityquestion:['',Validators.required],
      securityanswer:['',Validators.required]
    })
  }

  check(username){
    console.log(username.value)
    this.emailAlredyExist$ =  this.http.checkUserName(username.value)

  }

  get username(){
    return this.form.controls['username']
  }

  get creditcard(){
    return this.form.controls['creditcard']
  }

  get cnic(){
    return this.form.controls['cnic']
  }

  get passport(){
    return this.form.controls['passport']
  }
  
  get email(){
    return this.form.controls['email']
  }

  get dateofbirth(){
    return this.form.controls['dateofbirth']
  }
  get carrier(){
    return this.form.controls['carrier']
  }
  get securityquestion(){
    return this.form.controls['securityquestion']
  }

  get securityanswer(){
    return this.form.controls['securityanswer']
  }

  submit(){
    console.log(this.form.value)
    this.res$ =  this.http.registerUseCreditCard(this.form.value).pipe(
     catchError((er) => of(er))
    )
     
  }


  shouldBeUnique(control:AbstractControl): Promise<ValidationErrors | null >{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value === this.randomText){
          resolve(null)        
        }
        else{
          this.update();
           resolve({unique:true})
        }
      },2000)
    })
  }

  update(){
    this.randomText = this.getRandomString();
  }
  getRandomString() {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < 6; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

}
