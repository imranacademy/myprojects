import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselsliderleftComponent } from './carouselsliderleft/carouselsliderleft.component';
import { CarouselsliderrightComponent } from './carouselsliderright/carouselsliderright.component';
import { FeatureslideroneComponent } from './featuresliderone/featuresliderone.component';
import { FeatureslidertwoComponent } from './featureslidertwo/featureslidertwo.component';
import { MidsectionBannerComponent } from './midsection-banner/midsection-banner.component';



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
    CommonModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
