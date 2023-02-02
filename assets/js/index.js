//? ###########################  Landing Page Start  ###########################
if ($("[page-name=landingPage]").length) {
    $(function(){
        $(".footer").load("footer.html"); 
        $(".header").load("header.html"); 
      });

      
}
//! ########################### Landing Page End ###########################

//? ###########################  mainSection Page Start  ###########################
if ($("[page-name=mainSection]").length) {
  new TomSelect(".singleSelect",{
    allowEmptyOption: false,
    create: false
  });

  $('.newAddedCarousel1').owlCarousel({
    loop: true,
    items: 16,
    margin: 3,
    nav: true,
    dots: false,
    center: false,
    freeDrag: false,
    lazyLoad: true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    smartSpeed: 1200,
    responsiveClass: true,
    responsive: {
        0: {
            items: 3,
        },
        360: {
          items: 3,
        },
        440: {
          items:5,
        },
        576: {
            items: 6,
        },
        768: {
          items: 5,
        },
        992: {
          items: 6,
        },
        1200: {
          items: 8,
          nav: true,
      },
    },
    navText: ["", ""]
});

$('.newAddedCarousel2').owlCarousel({
  loop: true,
  items: 16,
  margin: 0,
  nav: true,
  dots: false,
  center: false,
  freeDrag: false,
  lazyLoad: true,
  autoplay:true,
  autoplayTimeout:2500,
  autoplayHoverPause:true,
  smartSpeed: 1200,
  responsiveClass: true,
  responsive: {
      0: {
          items: 1,
      },
      576: {
          items: 3,
          margin:5,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 1,
        nav: true,
    },
  },
  navText: ["", ""]
});

$('.newAddedCarousel3').owlCarousel({
  loop: false,
  items: 16,
  margin: 20,
  nav: true,
  dots: false,
  center: false,
  freeDrag: false,
  lazyLoad: true,
  autoplay:false,
  autoplayTimeout:1500,
  autoplayHoverPause:true,
  smartSpeed: 1200,
  responsiveClass: true,
  responsive: {
      0: {
          items: 1,
      },
      576: {
          items: 2,
          autoplay:false,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
        nav: true,
    },
  },
  navText: ["", ""]
});
}
//! ########################### mainSection Page End ###########################