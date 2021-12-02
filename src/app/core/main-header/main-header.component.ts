import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IdentityService } from 'src/app/identity/identity.service';
import { IUser } from 'src/app/shared/models/IUser';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  isUserLogedInTrue: boolean;
  currentUser$: Observable<IUser>;
  
  constructor(private identityService: IdentityService) { }

  ngOnInit() {
    this.currentUser$ = this.identityService.currentUser$;
  }


  logout(){
    this.identityService.logOut();
 }
}

