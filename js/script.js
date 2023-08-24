//dropdown menu
$(document).ready(function() {
  $('.drop-menu').click(function() {
    $('.dropdown-menu').toggleClass('visible');
  });
});


// Sticky header

window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//Slick Slider Testimonial
$(".slider").slick({
  dots: true,
  arrows:false,
  speed: 500,
  infinite: false,
  centerMode: true,
  variableWidth: true,
  draggable: true,
  slidesToShow:1
});

//Slick Slider News & Stories
$(document).ready(function(){
  $('.category-carousel').slick({
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    // variableWidth: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    dots:false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

//feature jobs carousel
$(document).ready(function(){
  $('.jobs-carousel').slick({
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    //variableWidth: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    dots:false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


//book Appointment Modal
$(document).click(function (e) {
 
  if ($(e.target).is('.modal-content')) {
    
     $('.modal').fadeOut(500);
      $('.modal-backdrop').fadeOut(500);
  }
});