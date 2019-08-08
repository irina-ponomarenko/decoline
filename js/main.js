$(document).ready(function() {

       /*-------------fixed header---------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
            $('.header').addClass("fixed");
            $('body').addClass("active-header");
        } else{
            $('.header').removeClass("fixed");
            $('body').removeClass("active-header");
        }
    });
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

    $("#menu-m").on("click","a", function (event) {
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

    $(".navbar-btn-toggle").on('click', function () {
        $(this).toggleClass("close-btn");
        $(this).closest('.mobile-version').toggleClass("white-menu");
       $(".mobile-menu").slideToggle(500);
    });

    $('.mobile-version .nav-link').on('click', function () {
       $(this).closest('.mobile-menu').slideToggle(500);
        $(this).closest('.mobile-version').removeClass("white-menu");
        $(this).closest('.mobile-version').find(".navbar-btn-toggle").removeClass("close-btn");
    });

     /*-------------------tabs-------------*/
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

    $('.city').on('click', function (event) {
        event.preventDefault();
       $(this).closest('body').addClass("popap-dark");
       $(this).closest('body').find(".city-order-popup").fadeIn(500);
    });
    $('.close-popup-btn').on('click', function () {
        $(this).closest('body').removeClass("popap-dark");
       $(this).closest('.city-order-popup').fadeOut();
    });

    $('.add-punkt').on('click', function (event) {
        event.preventDefault();
        $(this).closest('body').addClass("popap-dark");
        $(this).closest('body').find(".punkt-order").fadeIn(1, function() {
            if ($(this).is(':visible'))
                $(this).css('display','flex');
        });
    });
    $('.close-popup-btn').on('click', function () {
        $(this).closest('body').removeClass("popap-dark");
        $(this).closest('.punkt-order').fadeOut();
    });

    $(".adress-punkt").on("click", function () {
        $(this).closest('.list-punkt').find(".adress-punkt").removeClass("active-sub-punkt");
       $(this).addClass("active-sub-punkt");

    });
});