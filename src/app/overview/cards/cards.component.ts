import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomerRegistrationData } from 'src/app/shared/models/IUser';
import { OverviewService } from '../services/overview.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  userDetails:CustomerRegistrationData;
  userCards: Observable<any[]>;
  http$: Observable<any[]>;
  data:string;
   msg: string;
  constructor(private overviewService:OverviewService) { }

  ngOnInit() {
          this.userDetails = JSON.parse(localStorage.getItem('userDetails'))[0];
    const obj = {
      "creditcard": "",
      "cnic": '4220109469949'
    }
  this.userCards =  this.overviewService.GetCreditCardsByCnic(obj).pipe(map(x=>{
  return x["data"]["userData"]
  }));
 // this.overviewService.getuserwallet("faizat").subscribe(x=>console.log(x))


  }
}
