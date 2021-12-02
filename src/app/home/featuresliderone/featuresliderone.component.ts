import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-featuresliderone',
  templateUrl: './featuresliderone.component.html',
  styleUrls: ['./featuresliderone.component.css']
})
export class FeatureslideroneComponent implements OnInit {
  slides = [
    {
      heading:"Tax Payments",
      subHeading:"Provincial Tax Payments",
      img1:"assets/img/Featured/7.png",
      img2:"assets/img/line.png"
    },
   
     
    {
      "heading":"Utility Bills",
      "subHeading":"Pay your utitlity bills",
      "img1":"assets/img/Featured/5.png",
      "img2":"assets/img/line.png"
    },
    {
      "heading":"Tax Payments",
      "subHeading":"Provincial Tax Payments",
      "img1":"assets/img/Featured/8.png",
      "img2":"assets/img/line.png"
    },
    {
      "heading":"Tax Payments",
      "subHeading":"Provincial Tax Payments",
      "img1":"assets/img/Featured/6.png",
      "img2":"assets/img/line.png"
    },
    {
      "heading":"Tax Payments",
      "subHeading":"Provincial Tax Payments",
      "img1":"assets/img/Featured/5.png",
      "img2":"assets/img/line.png"
    }
  ];

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: false,
    infinite: true,
    prevArrow: '<img  class="featureprevarrow" src="assets/icons/prev_red.png">',
    nextArrow: '<img class="featurenextarrow" src="assets/icons/next_red.png">',
    responsive: [{
      breakpoint: 980, // tablet breakpoint
      settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false,
          dots: true

      }
  },
  {
      breakpoint: 480, // mobile breakpoint
      settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false,
          dots: true
      }
  },
  {
      breakpoint: 734, // mobile breakpoint
      settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false,
          dots: true
      }
  },

]
  
}
  constructor() { }

  ngOnInit(): void {
    AOS.init({
      easing: 'ease-in-out-sine'
    });
  }

}
