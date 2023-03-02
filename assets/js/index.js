//? ###########################  Landing Page Start  ###########################
if ($("[page-name=landingPage]").length) {
    $(function(){
        $(".footer").load("footer.html"); 
        $(".header").load("header.html"); 
      });
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
//! ########################### Landing Page End ###########################

//? ###########################  mainSection Page Start  ###########################
if ($("[page-name=mainSection]").length) {
  new TomSelect("#singleSelect",{
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

//? ###########################  Listing Page Start  ###########################

if ($("[page-name=listing]").length) {
  new TomSelect(".customSelect",{
    create: true,
    sortField: {
      field: "text",
      direction: "asc"
    }
  });

  $('.listOlwCarsoul').owlCarousel({
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
          items: 7,
        },
        992: {
          items: 8,
        },
        1200: {
          items: 9,
          nav: true,
        },
        1400: {
          items: 10,
          nav: true,
        },
      },
    navText: ["", ""]
});

}

//! ########################### Listing Page End ###########################


//? ###########################  Details Page Start  ###########################

if ($("[page-name=Details]").length) {

  $('.mostPopularCarsoul').owlCarousel({
    loop: false,
    items: 16,
    margin: 15,
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
            items: 2,
        },
        360: {
          items: 3,
          margin: 10,
        },
        440: {
          items:3,
          margin: 10,
        },
        576: {
            items: 4,
        },
        768: {
          items: 5,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 5,
          nav: true,
        },
        1400: {
          items: 6,
          nav: true,
        },
      },
    navText: ["", ""]
});

$("#basicExample").justifiedGallery({
  lastRow : 'nojustify', 
  rowHeight : 140, 
  margins : 10
});

var lightbox = GLightbox({
touchNavigation: true,
// loop: true,
// autoplayVideos: true,
// 'type': 'image',
// 'title': 'My Title',
// 'description': 'Example',
});

}

//! ########################### Details Page End ###########################

//? ###########################  Checkout Page Start  ###########################

if ($("[page-name=Checkout]").length) {

  $('.mostPopularCarsoul').owlCarousel({
    loop: false,
    items: 16,
    margin: 15,
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
            items: 1.15,
        },
        360: {
          items: 1.1,
          margin: 10,
        },
        440: {
          items:1.5,
          margin: 10,
        },
        576: {
            items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 2,
        },
        1200: {
          items: 3,
          nav: true,
        },
        1400: {
          items: 3,
          nav: true,
        },
      },
    navText: ["", ""]
});

new TomSelect("#selectBank",{
  allowEmptyOption: false,
  create: false
});

$('.buttons button').on('click', function () {
  var $self = $(this);
  if (!$self.hasClass('active')) {
    var toggle = $self.data('toggle'); 

    // Switch active buttons
    $('.active').removeClass('active');
    $self.addClass('active');

    // Switch active forms
    $('form.option').attr('disabled', true);
    $(toggle).addClass('active').attr('disabled', false);

    setFormHeight();
  }
});

$(function () {
  // Set form height on document ready
  setFormHeight();

  // Set up formatting for Credit Card fields
  $('#credit .cc-number').formatCardNumber();
  $('#credit .cc-expires').formatCardExpiry();
  $('#credit .cc-cvc').formatCardCVC();
});

// Set the height of the container to the height of the active form elements
function setFormHeight () {
  var activeHeight = $('.option.active').height(),
      submitHeight = $('.form-submit').outerHeight();
  $('.input').animate({
    height: activeHeight + submitHeight + 5
  }, 350);
}

$(function () {
  // Set form height on document ready
  setcustom();

  // Set up formatting for Credit Card fields
  $('#foodCredit .cc-number').formatCardNumber();
  $('#foodCredit .cc-expires').formatCardExpiry();
  $('#foodCredit .cc-cvc').formatCardCVC();
});

// Set the height of the container to the height of the active form elements
function setcustom () {
  var activeHeight = $('.option.active').height(),
      submitHeight = $('.form-submit').outerHeight();
  $('.input').animate({
    height: activeHeight + submitHeight + 5
  }, 350);
}

let addressCard = document.querySelectorAll('.addressCard');
let showmoreBtn = document.querySelectorAll('.addressLabel');
    showmoreBtn.forEach(showmorebtns => {
        showmorebtns.addEventListener('click', (e) => {
            for(i=0; i<addressCard.length; i++){
                addressCard[i].classList.remove('active');
            }
            let a = e.currentTarget.getAttribute('check-aria');
            let b = document.getElementById(a);
            b.classList.add('active');
        })
    })




}

//! ########################### Checkout Page End ###########################



setTimeout(()=>{
  let a = document.querySelectorAll(".loading-wrapper");
  a.forEach((e)=>{
   e.classList.remove('active');
  })
 }, 1000);

