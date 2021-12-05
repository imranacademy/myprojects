import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../app.animation';
import { IdentityService } from '../identity/identity.service';

@Component({
  selector: 'app-overview-tabs',
  templateUrl: './overview-tabs.component.html',
  styleUrls: ['./overview-tabs.component.css'],
  animations: [slideInAnimation]
})
export class OverviewTabsComponent implements OnInit {

  constructor(private identityservice:IdentityService) { }

  ngOnInit(): void {
  }

}
