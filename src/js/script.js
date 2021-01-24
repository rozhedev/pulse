// @@include('alert.js');

$(document).ready(function () {
    $('.slider__wrapper').slick({
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/catalog/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/catalog/right.svg"></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    dots: true, 
                }
            }
        ]
    });
});