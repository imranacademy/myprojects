import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountholdersComponent } from './register/accountholders/accountholders.component';
import { CreditcardcustomersComponent } from './register/creditcardcustomers/creditcardcustomers.component';
import { DebitcardcustomersComponent } from './register/debitcardcustomers/debitcardcustomers.component';
import { RegisterComponent } from './register/register.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'termsconditions', component:TermsconditionsComponent},
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
