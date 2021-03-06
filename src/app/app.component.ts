import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { IdentityService } from './identity/identity.service';
import { PostsService } from './posts.service';
import { CustomerRegistrationData, IUser } from './shared/models/IUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'alfaweb';

  constructor(private identityService: IdentityService,private router:Router) {}

  ngOnInit() {
  this.loadCurrentUser();
  }
  loadCurrentUser() {
    this.identityService.loadCurrentUser(JSON.parse(localStorage.getItem('user')));
    if(localStorage.getItem('token')!=null){
       this.router.navigate(['/overview/overview-tabs']);
    }
    // this.identityService.loadCurrentUser(token).subscribe(() => {
    //   console.log('loaded user');
    // }, error => {
    //   this.router.navigate(['/identity/login'])
    //   console.log(error);
    // });
  }
}
