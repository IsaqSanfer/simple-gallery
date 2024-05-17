document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('#randomSlide', {
        slidesPerView: 1.5,
        spaceBetween: 5,

        breakpoints: {
            768: {
                spaceBetween: 30,
                slidesPerView: 5,
            }
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
})