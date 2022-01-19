

let swiperTrees = null;
function initSwipers() {
  let swiperSlide = $(".swiper-slide");
  let swiperWrapper = $(".swiper-wrapper");
  swiperSlide.each((index, slide) => {
    slide.classList.remove("col-md-4");
  });
  swiperWrapper.each((index, wrapper) => {
    wrapper.classList.remove("row");
  });
  swiperTrees = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 30,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });
}
function destroySwipers() {
  swiperTrees?.destroy();
  swiperTrees = null;
  let swiperSlide = $(".swiper-slide");
  let swiperWrapper = $(".swiper-wrapper");
  swiperSlide.each((index, slide) => {
    slide.classList.add("col-md-4");
  });
  swiperWrapper.each((index, wrapper) => {
    wrapper.classList.add("row");
  });
  $('.swiper-wrapper').removeAttr('style');
  $('.swiper-slide').removeAttr('style');
}

function adjustPageItems() {
  let width = document.documentElement.clientWidth;
  if (width >= 776) {
    destroySwipers();
  }
  else {
    if (swiperTrees == null) {
      initSwipers();
    }
  }
}

$(document).ready(() => {
  adjustPageItems();
});

$(window).resize(() => {
  adjustPageItems();
});
