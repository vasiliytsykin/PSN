function engageCarousel(element, settings) {
    
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
        var benefits = $('.main-page .benefit-list');
        var verticalBlocks = $('.main-page .benefit-list .info-block--vert');
        var verticalBlocksWrapper = 'info-block--vert__over';

        if(width <= 1024)
        {
            verticalBlocks.unwrap('.' + verticalBlocksWrapper);
            var stagePadding = Math.floor(0.15 * width);
            var margin = Math.floor(0.05 * width);
            engageCarousel(benefits, {
                items:1,
                responsive: {
                    0: {
                        dots: true
                    },
                    768: {
                        dots: false,
                        margin: margin,
                        stagePadding: stagePadding
                    }
                }
            });
        }
        else
        {
            destroyOwlCarousel(benefits);
            if(!verticalBlocks.parent('.' + verticalBlocksWrapper).length)
                verticalBlocks.wrapAll('<div class="' + verticalBlocksWrapper + '"></div>');
        }

    }).resize();

    scrollTop($('.scroll-top a'), 0);

    engageCarousel($('.main-offer__content'), {

        items: 1,
        loop: true,
        nav: false,
        mouseDrag: false,
        animateOut: 'fadeOut'
    });

    playMainVideo();

});




