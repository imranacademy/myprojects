import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICardSummary } from 'src/app/shared/models/ICardSummary';
import { OverviewService } from '../services/overview.service';

@Component({
  selector: 'app-cardsummary',
  templateUrl: './cardsummary.component.html',
  styleUrls: ['./cardsummary.component.css']
})
export class CardsummaryComponent implements OnInit {
  card:ICardSummary;
  constructor(private route:ActivatedRoute,private overviewService:OverviewService) { 
    // this.route.data.subscribe((data:{cardnumber:ICardSummary})=>{
    //  this.card =  data.cardnumber
    // })
    // console.log(this.card.responseCode)
  }
//this.route.snapshot.data["cardnumber"]
  ngOnInit(): void {
   this.overviewService.CreditCardSummary('5239690014388102').subscribe(response=>{
     this.card = response["data"];
     console.log(this.card)
   })
   //var value =  JSON.parse(localStorage.getItem('cardsummary'))
  // console.log(value);
  }

}
