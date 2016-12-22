$(function () {
    

    $('.mortgage-calc .select-box .caption').on('click', function () {

        $(this).closest('.select-box').toggleClass('open');

    });

    (function initCalc() {

        var selectBox = $('.mortgage-calc .select-box'),
            caption = selectBox.find('.caption'),
            option = selectBox.find('.sub-option'),
            input = selectBox.find('input');

        option.on('click', function () {

            var textValue = $(this).html(),
                value = textValue.replace('%', '').replace(',', '.');
            caption.html(textValue);
            input.val(value);

            selectBox.removeClass('open');

        });

        var price = $('.price__value').html();

        $('.mortgage-calc input[name="price"]').val(price);

    }());

});