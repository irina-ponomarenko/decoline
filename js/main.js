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
});