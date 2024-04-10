$(document).ready(function () {
  $(".product-list").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false, // Chú ý sửa lại 'Infinity' thành 'infinite'
    arrows: true,
    draggable: false,
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow'><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button>",
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });
});
