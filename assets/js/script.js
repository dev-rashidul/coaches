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

// Hero Slider JavaScript

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
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
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
      ],
    prevArrow: '<span class="slick-prev"><i class="fa-solid fa-chevron-left"></i></span>',
    nextArrow: '<span class="slick-next"><i class="fa-solid fa-chevron-right"></i></span>',
});