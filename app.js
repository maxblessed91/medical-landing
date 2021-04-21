let horizontalSwiper = new Swiper('.swiper-container-h', {
    scrollbar: {
    el: '.swiper-scrollbar',
    clickable: true,
    draggable: true,
    dragSize: '20',
    type: 'progressbar',
    speed: 800,
  },
});

let verticalSwiper = new Swiper('.swiper-container-v', {
  direction: 'vertical',
  mousewheel: {
    sensitivity: 1,
  },
  pagination: {
    el: '.swiper-pagination-v',
    type: 'bullets',
    clickable: true,
    bulletClass: 'page__bullet',
    bulletActiveClass: 'page__bullet_active'
  },
});
