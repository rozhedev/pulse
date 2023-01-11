$(document).ready(function () {
    // SLIDER

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

    // TABS

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

    // MODAL

    $('[data-modal=consult-form').on('click', function () {
        $('.overlay, #consult-form').fadeIn();
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consult-form, #thanks, #order').fadeOut()
    });

    $('.btn--little').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
        })
    });

    // VALIDATOR & PHONE MASK

    function validateForm(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                phone: "required",
                email: {
                    required: true,
                    email: true,
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите не меньше {0} символов"),
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен почтовый адрес"
                }
            }
        });
    }

    validateForm('#consult-form form');
    validateForm('#section-form');
    validateForm('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    // SEND FORM

    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "php/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            // $('.overlay', '#thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    // SMOOTH LOAD & PAGE UP

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1500) {
            $('.pageup').fadeIn();
        }
        else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });

    new WOW().init();
});