import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-termsconditions',
  templateUrl: './termsconditions.component.html',
  styleUrls: ['./termsconditions.component.css']
})
export class TermsconditionsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    AOS.init({
      easing: 'ease-in-out-sine'
    });
  }
  submit(val:any){
   if(val.value){
     this.router.navigateByUrl('/identity/register')
   }
  }
}
