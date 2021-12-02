import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { OverviewService } from '../services/overview.service';

@Injectable({
  providedIn: 'root'
})
export class OverviewResolver implements Resolve<Observable<any>> {
  constructor(private overviewService:OverviewService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log(route.params["cardnumber"])
    return  this.overviewService.CreditCardSummary(route.params["cardnumber"]);
    // console.log(route.params["cardnumber"])
    // return of(true);
  }
}
