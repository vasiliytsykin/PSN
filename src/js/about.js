function openFeature(el) {

    var parent = el.closest('.block-features-item');

    if(!parent.hasClass('on'))
        $('.block-features-item').removeClass('on');

    parent.toggleClass('on');

}

$(function () {

    engageOwlCarousel($('.about-page .gallery__slider'), {

        items: 1,
        loop: false,
        navText: ['', ''],
        responsive: {
            0: {
                nav: false
            },
            1025: {
                nav: true
            }
        }

    });

    $('.about-page .switch__tab').on('click', function () {

        $('.gallery__tab').toggleClass('active');
        $('.switch__tab').toggleClass('active');

    });

    $('.block-features-open-text').on('click', function () {

        openFeature($(this));
        return false;

    });
    $('.block-features .btn-cross').on('click', function () {

        openFeature($(this));
        return false;

    });

});