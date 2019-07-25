$(document).ready(function() {
    /*---------------------------маска на ввод---------------*/
    $("#phone").mask("+7 (999) 999-9999");
    $("#phone1").mask("+7 (999) 999-9999");

    /*-----------------клик по кнопке звонка------------------*/

    $('.popup_toggle').on('click', function () {
        $(this).fadeOut(500);
        setTimeout(() => {
            $(this).closest('.form-map').find('.popup').fadeIn(500);
        },500);
    });

    $('.close-popup').on('click', function () {
       $('.popup').fadeOut(500);
        setTimeout(() => {
            $('.popup_toggle').fadeIn(500);
        },500);

    });

    /*-----------------counter------------------*/

    $('.to-bottom').on('click', function () {
       var $input = $(this).closest('.counter').find('input');
       var count = parseInt($input.val()) - 1;
       count = count < 1 ? 1 : count;
       $input.val(count);
       $input.change();
       return false;
    });
     $('.to-top').on('click', function () {
       var $input = $(this).closest('.counter').find('input');
       $input.val(parseInt($input.val()) + 1);
       $input.change();
       return false;
    });

     /*------------------back to top----------------*/
    if ($('#back-to-top').length) {
        var scrollTrigger = 500, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    /*-------------------scroll to section--------*/

    $("#menu").on("click","a", function (event) {
        event.preventDefault(); //опустошим стандартную обработку
        var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
            top = $(id).offset().top; //определим высоту от начала страницы до якоря
        $('body,html').animate({scrollTop: top}, 1500); //сделаем прокрутку за 1 с
    });

    $("#menu2").on("click","a", function (event) {
        event.preventDefault(); //опустошим стандартную обработку
        var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
            top = $(id).offset().top; //определим высоту от начала страницы до якоря
        $('body,html').animate({scrollTop: top}, 1500); //сделаем прокрутку за 1 с
    });
});