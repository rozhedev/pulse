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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function () {
        $(this)
            .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
    });

    function toggleClass(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__main').eq(i).toggleClass('catalog-item__main--active');
                $('.catalog-item__more').eq(i).toggleClass('catalog-item__more--active');
            })
        })
    };

    toggleClass('.catalog-item__link');
    toggleClass('.catalog-item__back');
});