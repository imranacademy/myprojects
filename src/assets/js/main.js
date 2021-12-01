  $(document).ready(function() {
      $("#variable").slick({
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


      });
      $("#variable1").slick({
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

      });
      //   $("#dvfeature").slick({
      //           dots: false,
      //           infinite: true,
      //           slidesToShow: 4,
      //           slidesToScroll: 3,
      //           prevArrow: '<img  class="featureprevarrow" src="assets/icons/prev_red.png">',
      //           nextArrow: '<img class="featurenextarrow" src="assets/icons/next_red.png">',
      //           mobileFirst: true,
      //           responsive: [
      //                 {
      //                         breakpoint: 768,

      //                 }
      //           ]                 
      //           }); 

      //   $("#dvmall").slick({
      //           dots: false,
      //           infinite: true,
      //           slidesToShow: 3,
      //           slidesToScroll: 3,
      //           prevArrow: '<img  class="prevarrowbuttons" src="assets/icons/prev_red.png">',
      //           nextArrow: '<img class="nextarrowbutton" src="assets/icons/next_red.png">',
      //       }); 

      $("#dvfeature2").slick({
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 3,
          prevArrow: '<img  class="featureprevarrow" src="../assets/icons/prev_red.png">',
          nextArrow: '<img class="featurenextarrow" src="../assets/icons/next_red.png">',

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
      });

      $("#dvmall2").slick({
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 3,
          prevArrow: '<img  class="prevarrowbuttons" src="../assets/icons/prev_red.png">',
          nextArrow: '<img class="nextarrowbutton" src="../assets/icons/next_red.png">',

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
                      slidesToShow: 4,
                      slidesToScroll: 2,
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
      });

 $("#dvmall3").slick({
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
                      dots: true,

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
      });
      $("#dvfeature").slick({
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 3,
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
      });

      $("#dvmall").slick({
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 3,
          prevArrow: '<img  class="prevarrowbuttons" src="assets/icons/prev_red.png">',
          nextArrow: '<img class="nextarrowbutton" src="assets/icons/next_red.png">',

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
                      slidesToShow: 4,
                      slidesToScroll: 2,
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
      });
  });