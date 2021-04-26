;
;
function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support === true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;
;
;
;
new Swiper('.swp__container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  speed: 400,
  breakpoints: {
    320: {
      slidePerView: 1,
      slidePerGroup: 1,
      spaceBetween: 30,
    },
    800: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
    1070: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 60,
    },
  },
});
;
;
document.querySelector('.icon-menu').addEventListener('click', () => {
  document.querySelector('.icon-menu').classList.toggle('_active');
  document.querySelector('.header__menu').classList.toggle('_active');
  document.querySelector('body').classList.toggle('_lock');
});
