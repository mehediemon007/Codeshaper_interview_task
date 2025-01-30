var slider = new Swiper ('.banner__slider__main', {
    slidesPerView: 1,
    loop: true,
    loopedSlides: 3,
    autoplay:true,
    effect: "fade",
    autoplay: {
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
        delay: 2000,
    },
});


var thumbs = new Swiper ('.banner__slider__thumbs', {
    slidesPerView: 3,
    spaceBetween: 24,
    speed: 2000,
    loop: true,
    slideToClickedSlide: true,
    autoplay: {
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
        delay: 2000,
    },
});


slider.controller.control = thumbs;
thumbs.controller.control = slider;