function engageOwlCarousel(element, settings) {
    
    if(element.hasClass('owl-carousel'))
        destroyOwlCarousel(element);
    element.addClass('owl-carousel').owlCarousel(settings);
    
}

function destroyOwlCarousel(element) {

    if (element.hasClass('owl-carousel'))
    {
        element.trigger('destroy.owl.carousel')
            .removeClass('owl-carousel owl-loaded owl-center');
    }

}

function scrollTop(element, pos){

    element.on('click', function () {
        $('body,html').animate({scrollTop: (pos)}, 600);
        return false;
    });

}

function playMainVideo() {

    var video =  document.getElementById("video-main");
    var $videoContainer = $(video).closest('.video');

    $('.btn-video').click(function(){
        video.play();
    });

    $('.btn-stop').click(function(){
        video.pause();
    });

    $(video)
        .on('pause', function (){
            $videoContainer.removeClass('play');
            video.currentTime = 0;
    })
        .on('play',function(){
            $videoContainer.addClass('play');
    });

    $('.btn-mute').click(function(){
        if(video.muted==true){
            video.muted=false;
            $videoContainer.removeClass('muted');
        }
        else{
            video.muted=true;
            $videoContainer.addClass('muted');
        }
    });
}

function removeShade() {
    $('.shade').removeClass('on');
    $('.global-menu').removeClass('open')
    $('body').removeClass('global-menu-open');
}

function handleBenefits(width) {

    var benefits = $('.main-page .benefit-list');


    if(width <= 1024)
    {
        var stagePadding = Math.floor(0.15 * width);
        var margin = Math.floor(0.05 * width);
        engageOwlCarousel(benefits, {
            items:1,
            margin: margin,
            stagePadding: stagePadding,
            responsive: {
                0: {
                    dots: true,
                    margin: 0,
                    stagePadding: 0
                },
                736: {
                    dots: false
                }
            }
        });
    }
    else
        destroyOwlCarousel(benefits);
}

$(function () {


    $('.burger-btn').on('click', function () {

        $('.global-menu').toggleClass('open');
        $('.shade').toggleClass('on');
        $('body').toggleClass('global-menu-open');
        $('.top-level').removeClass('open');

    });

    $('.shade').on('click', function () {
        $('.burger-btn').click();
    });

    $('.global-menu .nested').on('click', function () {

        $(this).closest('.top-level').toggleClass('open');
        return false;

    });

    engageOwlCarousel($('.main-slider'), {
        items: 1,
        loop: false,
        navText: ['', ''],
        responsive: {
            0: {
                nav: false
            },
            768: {
                nav: true
            }
        }
    });

    $('.actions-modal__content').slick({

        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        appendArrows: '.actions-modal__controls .arrows',
        prevArrow: '<div class="arrow prev"></div>',
        nextArrow: '<div class="arrow next"></div>'

    });

    $('.actions-modal__tip').on('click', function () {

        $(this).closest('.actions-modal').addClass('open');

    });
    $('.actions-modal__controls .btn-close').on('click', function () {

        $(this).closest('.actions-modal').removeClass('open');

    });

    $(window).on('resize', function () {

        var width = $(window).width();
        handleBenefits(width);
        if(width > 1340)
            removeShade();

    }).resize();

    scrollTop($('.scroll-top a'), 0);

    engageOwlCarousel($('.main-offer__content'), {

        items: 1,
        loop: true,
        nav: false,
        mouseDrag: false,
        animateOut: 'fadeOut'
    });

    playMainVideo();

    $('.gallery__switch .switch__tab').on('click', function () {

        if(!$(this).hasClass('active')){
            $('.gallery__tab').toggleClass('active');
            $('.gallery__switch .switch__tab').toggleClass('active');
        }


    });

    /*-------------DEVELOPER---------*/

    engageOwlCarousel($('.developer-page .gallery__slider'), {

        items: 1,
        // loop: true,
        nav: false,
        // autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut'

    });

    /*---------END DEVELOPER---------*/

});




