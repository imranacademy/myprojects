import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    SubHeaderComponent,
    MainHeaderComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
  SubHeaderComponent,
  MainHeaderComponent,
  NavBarComponent,
  FooterComponent
  ]
})
export class CoreModule { }
