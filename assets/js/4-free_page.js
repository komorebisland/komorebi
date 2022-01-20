let swiperHouses, swiperExperiences = null;

function initSwipers() {
  let houseSwiperSlide = $(".swiper-slide.house-swiper-slide");
  let experienceSwiperSlide = $(".swiper-slide.experience-swiper-slide");
  let swiperWrapper = $(".swiper-wrapper");
  houseSwiperSlide.each((index, slide) => {
    slide.classList.remove("col-md-12");
  });
  experienceSwiperSlide.each((index, slide) => {
    slide.classList.remove("col-md-4");
  });
  swiperWrapper.each((index, wrapper) => {
    wrapper.classList.remove("row");
  });
  swiperHouses = new Swiper(".swiper1", {
    loop: true,
    spaceBetween: 30,
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination1",
    },
  });


  swiperExperiences = new Swiper(".swiper2", {
    loop: true,
    spaceBetween: 30,
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination2",
    },
  });
}
function destroySwipers() {
  swiperHouses?.destroy();
  swiperExperiences?.destroy();
  swiperHouses = null;
  swiperExperiences = null;
  let houseSwiperSlide = $(".swiper-slide.house-swiper-slide");
  let experienceSwiperSlide = $(".swiper-slide.experience-swiper-slide");
  let swiperWrapper = $(".swiper-wrapper");
  houseSwiperSlide.each((index, slide) => {
    slide.classList.add("col-md-12");
  });
  experienceSwiperSlide.each((index, slide) => {
    slide.classList.add("col-md-4");
  });
  swiperWrapper.each((index, wrapper) => {
    wrapper.classList.add("row");
  });
  $(".swiper-wrapper").removeAttr("style");
  $(".swiper-slide").removeAttr("style");
}

function adjustPageItems() {
  let width = document.documentElement.clientWidth;
  let housesNavigator = $("#houses-section-navigator");
  let experiencesNavigator = $("#experiences-section-navigator");
  if(width <= 992) {
    housesNavigator.addClass("pointer");
    $(housesNavigator).on("click", function() {
      window.location.hash = "#section_alloggi";  
    });
    $(experiencesNavigator).on("click", function() {
      window.location.hash = "#section_esperienze";  
    });
  }
  else {
    housesNavigator.removeClass("pointer");
    $(housesNavigator).off("click");
    $(experiencesNavigator).off("click");
  }
  if (width >= 776) {
    destroySwipers();
  }
  else {
    if (swiperHouses == null || swiperExperiences == null) {
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
