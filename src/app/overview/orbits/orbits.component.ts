import { Component, OnInit } from '@angular/core';
import { CustomerRegistrationData } from 'src/app/shared/models/IUser';
import { OverviewService } from '../services/overview.service';

@Component({
  selector: 'app-orbits',
  templateUrl: './orbits.component.html',
  styleUrls: ['./orbits.component.css']
})
export class OrbitsComponent implements OnInit {
  userDetails:CustomerRegistrationData;
  islamic:any;
  conventional:any;
  constructor(private ovverView:OverviewService) { }

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'))[0];
    const obj = {
      "cnic":this.userDetails.cnic
    }
   this.ovverView.GetOrbits(obj).subscribe((response)=>{

     this.conventional   = response["data"]["convOrbits_"]
     this.islamic = response["data"]["islamicOrbits_"]
     console.log(this.conventional)
     console.log( this.islamic)
   })
  }

}
