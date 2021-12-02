import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carouselsliderleft',
  templateUrl: './carouselsliderleft.component.html',
  styleUrls: ['./carouselsliderleft.component.css']
})
export class CarouselsliderleftComponent implements OnInit {
  slides = [
    {images:"assets/img/banner-9.png"},
    {images:"assets/img/banner-1.png"},
    {images:"assets/img/banner-1.png"},
    {images:"assets/img/banner-1.png"}
  ];

  slides2 = [
    {images:"assets/img/banner-10.png"},
    {images:"assets/img/banner-2.png"},
    {images:"assets/img/banner-2.png"},
    {images:"assets/img/banner-2.png"}
  ];

  slideConfig = {
    dots: false,
    infinite: false,
    variableWidth: true,
    autoplay: true,
    //   prevArrow: '<img  class="" src="assets/icons/prev.png">',
    //   nextArrow: '<img class="" src="assets/icons/next.png">',


    autoplaySpeed: 4000,
    speed: 500,

    responsive: [{
            breakpoint: 980, // tablet breakpoint
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                autoplaySpeed: 3000,
                speed: 400
            }
        },
        {
            breakpoint: 480, // mobile breakpoint
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                autoplaySpeed: 3000,
                speed: 400



            }
        },
        {
            breakpoint: 734, // mobile breakpoint
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                dots: false,
                autoplaySpeed: 3000,
                speed: 400



            }

        },

    ]

  }

  slideConfig2 = {
    dots: false,
    infinite: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    //   prevArrow: '<img  class="" src="assets/icons/prev.png">',
    //   nextArrow: '<img class="" src="assets/icons/next.png">',

    responsive: [{
            breakpoint: 980, // tablet breakpoint
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                autoplaySpeed: 3000,
                speed: 400

            }
        },
        {
            breakpoint: 480, // mobile breakpoint
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                autoplaySpeed: 3000,
                speed: 400
            }
        },
        {
            breakpoint: 734, // mobile breakpoint
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                dots: false,
                autoplaySpeed: 3000,
                speed: 400



            }
        },

    ]

}
  constructor() { }

  ngOnInit(): void {
  }

}
