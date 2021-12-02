import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerRegistrationData } from 'src/app/shared/models/IUser';
import { IdentityService } from '../identity.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  returnUrl: string;
  userDetails:CustomerRegistrationData;
  constructor(private fb:FormBuilder,
    private idntityService: IdentityService,private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/overview/overview-tabs';
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm=this.fb.group({
      uname:[''],
      password:[''],
    });
    
  }

  onSubmit(){
    this.idntityService.login(this.loginForm.value).subscribe((response) => {
      this.userDetails = JSON.parse(localStorage.getItem('userDetails'))[0];
      if(this.userDetails.isFirstLogin === true){
        this.router.navigate(['/identity/setpassword']);
      }
      else if(this.userDetails.initialFee === 0)
      {
        this.router.navigate(['/identity/setpackage']);
      }
      else{
        this.router.navigateByUrl(this.returnUrl);
      }
    }, error => {
      console.log(error);
    });
  }
}
