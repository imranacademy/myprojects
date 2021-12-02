import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IdentityService } from 'src/app/identity/identity.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private identityService: IdentityService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.identityService.currentUser$.pipe(
      map(auth => {
        if (auth) {
          return true;
        }
          this.router.navigate(['/identity/login'], {queryParams: {returnUrl: state.url}});
     
        return false;
      })
    );
  }
}
