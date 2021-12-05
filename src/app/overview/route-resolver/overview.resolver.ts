import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ICardSummary } from 'src/app/shared/models/ICardSummary';
import { OverviewService } from '../services/overview.service';

@Injectable()
export class OverviewResolver implements Resolve<Observable<ICardSummary>> {
  constructor(private overviewService:OverviewService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICardSummary> {
    console.log(route.params["cardnumber"])
    return  this.overviewService.CreditCardSummary(route.params["cardnumber"]);
    // console.log(route.params["cardnumber"])
    // return of(true);
  }
}
