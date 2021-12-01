import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  show;
  show1;
  show2;
  one="1";
  constructor() { }

  ngOnInit(): void {
    this.show=true;
  }
  radioButtonChanged(f){
    console.log(f.value)
      if(f.value == "1"){
          this.show=true;
          this.show1=false;
          this.show2=false;
      }else if(f.value  == "2"){
        console.log(f.value)
        this.show1=true;
        this.show=false;
        this.show2=false;
      }
      else if(f.value == "3"){
        this.show2=true;
        this.show=false;
        this.show1=false;

      }
 }

}
