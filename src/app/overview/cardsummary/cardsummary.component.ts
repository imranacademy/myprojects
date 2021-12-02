import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OverviewService } from '../services/overview.service';

@Component({
  selector: 'app-cardsummary',
  templateUrl: './cardsummary.component.html',
  styleUrls: ['./cardsummary.component.css']
})
export class CardsummaryComponent implements OnInit {
  d:any;
  constructor(private route:ActivatedRoute,private overviewService:OverviewService) { 
    this.route.data.subscribe(data=>{
     this.d =  data["cardnumber"]
    })
    console.log(this.d)
  }

  ngOnInit(): void {
  //  this.overviewService.CreditCardSummary("5239690014388102").subscribe(x=>console.log(x))
  //  var value =  JSON.parse(localStorage.getItem('cardsummary'))
  //  console.log(value);
  }

}
