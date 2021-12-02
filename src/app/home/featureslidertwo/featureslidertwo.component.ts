import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-featureslidertwo',
  templateUrl: './featureslidertwo.component.html',
  styleUrls: ['./featureslidertwo.component.css']
})
export class FeatureslidertwoComponent implements OnInit {
  slides = [
    {imgSrc:"assets/img/banner-6.png"},
    {imgSrc:"assets/img/banner-7.png"},
    {imgSrc:"assets/img/banner-8.png"},
    {imgSrc:"assets/img/banner-8.png"}
  ]

  slideConfig = {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,

          responsive: [{
                  breakpoint: 980, // tablet breakpoint
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 3,
                      arrows: false,
                      dots: true

                  }
              },
              {
                  breakpoint: 480, // mobile breakpoint
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 4,
                      arrows: false,
                      dots: true
                  }
              },
              {
                  breakpoint: 1024, // mobile breakpoint
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 2,
                      arrows: false,
                      dots: true
                      // unslick: true
                  }
              }
          ]
  }
  constructor() { }

  ngOnInit(): void {
    AOS.init({
      easing: 'ease-in-out-sine'
    });
  }

}
