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
});