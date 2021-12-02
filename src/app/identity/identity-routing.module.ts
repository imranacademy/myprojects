import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth-guard';
import { ChangepasswordComponent } from '../overview/myprofile/usermanagement/changepassword/changepassword.component';
import { LoginComponent } from './login/login.component';
import { AccountholdersComponent } from './register/accountholders/accountholders.component';
import { CreditcardcustomersComponent } from './register/creditcardcustomers/creditcardcustomers.component';
import { DebitcardcustomersComponent } from './register/debitcardcustomers/debitcardcustomers.component';
import { RegisterComponent } from './register/register.component';
import { SetpackageComponent } from './setpackage/setpackage.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'termsconditions', component:TermsconditionsComponent},
  {path:'setpassword', 
  canActivate: [AuthGuard],
  component:SetpasswordComponent},
  {path:'setpackage', 
  canActivate: [AuthGuard],
  component:SetpackageComponent},
  {path:'register', component:RegisterComponent,
   children:[
    {path:'', redirectTo:'accountholders',pathMatch:'full'},
     {path:'accountholders', component:AccountholdersComponent},
     {path:'creditcardcustomers', component:CreditcardcustomersComponent},
     {path:'debitcardcustomers', component:DebitcardcustomersComponent}
   ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentityRoutingModule { }
