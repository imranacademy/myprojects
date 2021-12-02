import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { CarouselsliderleftComponent } from './carouselsliderleft/carouselsliderleft.component';
import { CarouselsliderrightComponent } from './carouselsliderright/carouselsliderright.component';
import { FeatureslideroneComponent } from './featuresliderone/featuresliderone.component';
import { FeatureslidertwoComponent } from './featureslidertwo/featureslidertwo.component';
import { MidsectionBannerComponent } from './midsection-banner/midsection-banner.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    HomeComponent,
    CarouselsliderleftComponent,
    CarouselsliderrightComponent,
    FeatureslideroneComponent,
    FeatureslidertwoComponent,
    MidsectionBannerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SlickCarouselModule,

  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
