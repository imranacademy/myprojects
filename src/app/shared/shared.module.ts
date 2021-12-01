import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';



@NgModule({
  declarations: [
    CustomerInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomerInfoComponent,
  ]
})
export class SharedModule { }
