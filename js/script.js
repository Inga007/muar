function clearFields() {
  document.querySelector(".searchinput input").value = "";
}





var swiper = new Swiper(".myCarousel", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  observer: true,

  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    650: {
      slidesPerView: 2.2,
    },
    800: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

var swiper2 = new Swiper(".mySwipercolection", {
  spaceBetween: 10,
  observer: true,

  breakpoints: {
    0: {
      slidesPerView: 2.8,
    },
    650: {
      slidesPerView: 3.5,
    },
    800: {
      slidesPerView: 4.3,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});

var swiper3 = new Swiper(".mySwiperNumb", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
