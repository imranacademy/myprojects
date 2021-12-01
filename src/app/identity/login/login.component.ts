import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IdentityService } from '../identity.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  returnUrl: string;
  
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
    this.idntityService.login(this.loginForm.value).subscribe(() => {
      this.router.navigateByUrl(this.returnUrl);
    }, error => {
      console.log(error);
    });
  }
}
