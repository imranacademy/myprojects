import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { AccountComponent } from './account/account.component';
import { CardsComponent } from './cards/cards.component';
import { OrbitsComponent } from './orbits/orbits.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { OverviewTabsComponent } from './overview-tabs.component';
import { ManageaccountComponent } from './myprofile/manageaccount/manageaccount.component';
import { UsermanagementComponent } from './myprofile/usermanagement/usermanagement.component';
import { ChangepackageComponent } from './myprofile/changepackage/changepackage.component';
import { AddaccountComponent } from './myprofile/manageaccount/addaccount/addaccount.component';
import { RemoveaccountComponent } from './myprofile/manageaccount/removeaccount/removeaccount.component';
import { UpdateprofileComponent } from './myprofile/usermanagement/updateprofile/updateprofile.component';
import { LoginactivityComponent } from './myprofile/usermanagement/loginactivity/loginactivity.component';
import { UseractivityComponent } from './myprofile/usermanagement/useractivity/useractivity.component';
import { ChangepasswordComponent } from './myprofile/usermanagement/changepassword/changepassword.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from "@angular/common/http";
import { AccountstatementComponent } from './accountstatement/accountstatement.component';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { OtacComponent } from './myprofile/otac/otac.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CardsummaryComponent } from './cardsummary/cardsummary.component';
import { OverviewResolver } from './route-resolver/overview.resolver';



@NgModule({
  declarations: [
    AccountComponent,
    CardsComponent,
    OrbitsComponent,
    MyprofileComponent,
    OverviewTabsComponent,
    ManageaccountComponent,
    UsermanagementComponent,
    ChangepackageComponent,
    AddaccountComponent,
    RemoveaccountComponent,
    UpdateprofileComponent,
    LoginactivityComponent,
    UseractivityComponent,
    ChangepasswordComponent,
    AccountstatementComponent,
    OtacComponent,
    CardsummaryComponent,
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    SharedModule
  ],
  providers:[OverviewResolver]
})
export class OverviewModule { }
