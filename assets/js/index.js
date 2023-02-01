//? ###########################  Landing Page Start  ###########################
if ($("[page-name=landingPage]").length) {
    $(function(){
        $("#footer").load("footer.html"); 
        $("#header").load("header.html"); 
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
            items: 2,
        },
        576: {
            items: 2.5,
        },
        768: {
          items: 3,
        },
        992: {
          items: 3,
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
          items: 1,
      },
      576: {
          items: 1,
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
}
//! ########################### mainSection Page End ###########################