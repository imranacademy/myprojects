import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AccountstatementComponent } from './accountstatement/accountstatement.component';
import { CardsComponent } from './cards/cards.component';
import { ChangepackageComponent } from './myprofile/changepackage/changepackage.component';
import { AddaccountComponent } from './myprofile/manageaccount/addaccount/addaccount.component';
import { ManageaccountComponent } from './myprofile/manageaccount/manageaccount.component';
import { RemoveaccountComponent } from './myprofile/manageaccount/removeaccount/removeaccount.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { OtacComponent } from './myprofile/otac/otac.component';
import { ChangepasswordComponent } from './myprofile/usermanagement/changepassword/changepassword.component';
import { LoginactivityComponent } from './myprofile/usermanagement/loginactivity/loginactivity.component';
import { UpdateprofileComponent } from './myprofile/usermanagement/updateprofile/updateprofile.component';
import { UseractivityComponent } from './myprofile/usermanagement/useractivity/useractivity.component';
import { UsermanagementComponent } from './myprofile/usermanagement/usermanagement.component';
import { OrbitsComponent } from './orbits/orbits.component';
import { OverviewTabsComponent } from './overview-tabs.component';


const routes: Routes = [
  {path:'overview-tabs', component:OverviewTabsComponent,
  children:[
    {path:'account',component:AccountComponent},
    {path:'',redirectTo:'account',pathMatch:'full'},
    {path:'accountstatement',component:AccountstatementComponent},
    {path:'cards',component:CardsComponent},
    {path:'orbits',component:OrbitsComponent},
    {path:'myprofile',component:MyprofileComponent,
     children:[
       {path:'manageaccount',component:ManageaccountComponent,
      children:[
        {path:'addaccount',component:AddaccountComponent},
        {path:'',redirectTo:'addaccount',pathMatch:'full'},
        {path:'removeaccount',component:RemoveaccountComponent},
      ]},
      {path:'',redirectTo:'manageaccount',pathMatch:'full'},
      {path:'usermanagement',component:UsermanagementComponent,
        children:[
          {path:'updateprofile',component:UpdateprofileComponent},
          {path:'',redirectTo:'updateprofile',pathMatch:'full'},
          {path:'loginactivity',component:LoginactivityComponent},
          {path:'useractivity',component:UseractivityComponent},
          {path:'changepassword',component:ChangepasswordComponent},
        ]},
       {path:'changepackage',component:ChangepackageComponent},
     ]},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
