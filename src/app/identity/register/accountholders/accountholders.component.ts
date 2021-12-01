import { Component, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { validateUsernameNotTaken } from '../../custom-validators/validateUsernameNotTaken';
import { IdentityService } from '../../identity.service';

@Component({
  selector: 'app-accountholders',
  templateUrl: './accountholders.component.html',
  styleUrls: ['./accountholders.component.css']
})
export class AccountholdersComponent implements OnInit {

  f;
  public edited = false;
    randomText = this.getRandomString();
    emailAlredyExist:boolean;
    userNamecheck:number;
  
  
  
    form:FormGroup;
    constructor(private http:IdentityService,private fb:FormBuilder,private render:Renderer2) { }
  
  
    passportShow;
    cnicShow;
    one="1";
    res:any;
    ngOnInit() {
      this.cnicShow = true;
    this.form = this.fb.group({
        accountnumber:['',Validators.required],
        cnic:[''],
        passport:[''],
        mobilenumber:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        dateofbirth:['',Validators.required],
        carrier:[null,Validators.required],
        username:['',Validators.required,validateUsernameNotTaken(this.http)],
        // recaptcha:['',Validators.required],
        captcha:['',[Validators.required,Validators.minLength(6)], this.shouldBeUnique.bind(this)],
        securityquestion:['',Validators.required],
        securityanswer:['',Validators.required]
      })
  
      this.form.get('cnic').setValidators(Validators.required);
  
     
    }
  
    radioButtonChanged(val){
      console.log(val.value)
     if(val.value =="1"){
       this.cnicShow=true;
       this.passportShow=false;
       this.form.get('cnic').setValidators(Validators.required);
       this.form.get('passport').clearValidators()
       this.form.get('passport').setValue('')
     }else if(val.value =="2"){
      this.passportShow=true;
      this.cnicShow=false;
        // console.log("Touched Value "+ this.form.get('passport').touched);
        this.form.get('passport').setValidators(Validators.required);
        this.form.get('cnic').clearValidators()
        this.form.get('cnic').setValue('')
     }
    }
  
    res$:Observable<any>;
    get username(){
      return this.form.controls['username']
    }
  
    get accountnumber(){
      return this.form.controls['accountnumber']
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
  
    check(username){
      console.log(username.value)
      this.http.checkUserName(username.value).subscribe(res=>{
      //  console.log(res)
        this.userNamecheck  =  res["userAvailable"][0]['reccount']
        console.log(this.userNamecheck)
        if(this.userNamecheck == 1){
          this.emailAlredyExist = true;
         console.log('User Already Exist')
         console.log(this.emailAlredyExist)
   
        }else{
          this.emailAlredyExist = false;
        }
      })
    }
    
  
    submit(){
      console.log(this.form.value)
     this.res$ =  this.http.registerUser(this.form.value).pipe(
      catchError((er) => of(er))
     )
   this.update();
      
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
      },300)
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


