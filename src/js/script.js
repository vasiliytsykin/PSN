// function attachActiveClass(element) {
//     var active = 'active'
//     $(".mobile-nav-header").removeClass(active);
//     if(!$(element).hasClass(active) && $(element).hasClass('on'))
//         $(element).addClass(active)
// }
//
// $(document).ready(function () {
//     $(".mobile-nav-header").click(function() {
//
//         if($(this).hasClass('main') && $(this).hasClass('on'))
//         {
//             $(".mobile-nav-header").removeClass('on')
//             $('.mobile-nav ul').slideUp();
//         }
//         else
//         {
//             $(this).toggleClass('on');
//
//             var parent = $(this).closest('.mobile-nav');
//             var ul = $(parent).find('ul:first');
//
//             $(ul).slideToggle();
//         }
//
//         attachActiveClass(this);
//
//         return false;
//     });
// });

function engageCarousel(element, settings) {
    
    element.addClass('owl-carousel').owlCarousel(settings);
    
}

$(function () {


    $('.burger-btn').on('click', function () {

        $(this).closest('.header__nav').toggleClass('open');
        $('.top-level').removeClass('open');

    });

    $('.header__nav .nested').on('click', function () {

        $(this).closest('.top-level').toggleClass('open');

    });

    engageCarousel($('.main-slider'), {
        items: 1,
        loop: false,
        nav: true,
        navText: ['', '']
    });
    
});




