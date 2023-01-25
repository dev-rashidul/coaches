// Hero Slider JavaScript

$('.hero-slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade:true,
    pauseOnHover: false,
    //infinite: true,
    Speed: 800,
    rtl: true,
    prevArrow: '<span class="slick-prev"><i class="fa-solid fa-chevron-left"></i></span>',
    nextArrow: '<span class="slick-next"><i class="fa-solid fa-chevron-right"></i></span>',
});

// Leading Area Slider JavaScript

$('.leading-slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ],
    prevArrow: '<span class="slick-prev"><i class="fa-solid fa-chevron-left"></i></span>',
    nextArrow: '<span class="slick-next"><i class="fa-solid fa-chevron-right"></i></span>',
});

// Testimonial Slider JavaScript

$('.testimonial-slider').slick({
  arrows: false,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  fade:true,
  pauseOnHover: false,
  //infinite: true,
  Speed: 800,
  rtl: true,
});


// Schools Slider JavaScript

$('.schools-slider').slick({
  arrows: true,
  dots: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  rtl: true,
  responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  prevArrow: '<span class="slick-prev"><i class="fa-solid fa-chevron-left"></i></span>',
  nextArrow: '<span class="slick-next"><i class="fa-solid fa-chevron-right"></i></span>',
});

// Articles Slider JavaScript

$('.articles-slider').slick({
  arrows: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  rtl: true,
  responsive: [

      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  prevArrow: '<span class="slick-prev"><i class="fa-solid fa-chevron-left"></i></span>',
  nextArrow: '<span class="slick-next"><i class="fa-solid fa-chevron-right"></i></span>',
});

// Coach Page Video Slider JavaScript

$('.video-slider').slick({
  arrows: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  rtl: true,
  responsive: [

      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  prevArrow: '<span class="slick-prev"><i class="fa-solid fa-chevron-left"></i></span>',
  nextArrow: '<span class="slick-next"><i class="fa-solid fa-chevron-right"></i></span>',
});