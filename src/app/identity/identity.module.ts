import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { IdentityRoutingModule } from './identity-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountholdersComponent } from './register/accountholders/accountholders.component';
import { CreditcardcustomersComponent } from './register/creditcardcustomers/creditcardcustomers.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';
import { DebitcardcustomersComponent } from './register/debitcardcustomers/debitcardcustomers.component';
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from '../shared/shared.module';
import {Ng2TelInputModule} from 'ng2-tel-input';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AccountholdersComponent,
    CreditcardcustomersComponent,
    DebitcardcustomersComponent,
    TermsconditionsComponent
  ],
  imports: [
    CommonModule,
    IdentityRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    Ng2TelInputModule
  ]
})
export class IdentityModule { }
