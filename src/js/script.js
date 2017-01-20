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
            nav: false,
            responsive: {
                0: {
                    margin: 0,
                    stagePadding: 0
                },
                736: {
                    margin: margin,
                    stagePadding: stagePadding
                }
            }
        });
    }
    else
    {
        destroyOwlCarousel(benefits);
    }
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
        if(width > 1340)
            removeShade();

    }).resize();

    scrollTop($('.scroll-top a'), 0);


    $('.gallery__switch .switch__tab').on('click', function () {

        var tabActive = $(this).data('tab'),
            active = 'active';

        $('.gallery__tab').removeClass(active);
        $('.gallery__switch .switch__tab').removeClass(active);

        $('.' + tabActive).addClass(active);


    });


    /*------------INDEX---------------*/

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

    $(window).on('resize', function () {

        var width = $(window).width();
        handleBenefits(width);

        var el = $('.benefits .circle:nth-child(1)');
        if(width <= 736)
            freeze(el);
        else
            unfreeze(el);

    }).resize();

    engageOwlCarousel($('.main-offer__content'), {

        items: 1,
        loop: true,
        nav: false,
        mouseDrag: false,
        animateOut: 'fadeOut'
    });

    playMainVideo();

    /*------------END INDEX------------*/


    /*-------------DEVELOPER---------*/

    engageOwlCarousel($('.developer-page .gallery__slider'), {

        items: 1,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut'

    });

    /*---------END DEVELOPER---------*/

    /*----------PANORAMA-------------*/

    engageOwlCarousel($('.panorama-page .photos__slider'), {

        items: 1,
        loop: true,
        navText: ['', ''],
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                nav: false
            },
            1025: {
                nav: true
            }
        }

    });

    if($('#pano').length){
        embedpano({
            swf:"/pano/tour.swf",
            xml:"/pano/tour.xml",
            target:"pano",
            html5:"prefer",
            passQueryParameters:true
        });
    }

    /*-------END PANORAMA-------------*/

    /*---------MAIN PLAN-------------*/

    var mainMap = $('.main-plan__map');

    if(mainMap.length)
    {
        console.log('ok');

        mainMap.addClass('handle');
        mainMap.parent().addClass('dragdealer');

        var canvas = new Dragdealer('main-map-over', {
            x: 0.7,
            y: 1,
            speed: 0.2,
            requestAnimationFrame: true
        });
    }

    /*-----END MAIN PLAN-------------*/

    /*----------------INFRA------------*/


    (function initInfraMap() {

        if($('#infra-map').length)
        {
            Markers['ind1000'] = {'name':'ЖК', 'group':'main', 'coord':{lat:55.560989, lng:37.576975}};
            gMap.markers = Markers;
            gMap.init('moscow', 'white');
            $('.infra-group__title a').click(function(){
                var group_show={};
                $(this).closest('.infra-group').find('.infra-subsection-title a').each(function(ind, el){
                    var  group_code = $(el).attr('href').replace('#','');
                    group_show[group_code]=group_code;
                });
                $('.infra-subsection-title, .infra-group').removeClass('active');
                $(this).parent().parent().addClass('active');
                gMap.filterByGroup(group_show);
                return false;
            });
            $('.infra-subsection-title a').click(function(){
                $('.infra-subsection-title, .infra-group').removeClass('active');
                $(this).parent().addClass('active');
                var group_show={};
                var  group_code = $(this).attr('href').replace('#','');
                group_show[group_code]=group_code;
                gMap.filterByGroup(group_show);
                return false;
            });


            (function setIcons(pathPrefix) {

                var groups = gMap.groups;

                groups.forEach(function (group) {

                    var iconPath = pathPrefix + group + '.svg';
                    var element = $('.' + group);

                    element.find('.icon').css({
                        'background-image': 'url(' + iconPath + ')'
                    });
                });

            })('/img/infra/icon-');


            $('.infra-nav__handle').on('click', function () {

                $('.infra-nav').toggleClass('closed');

            });

        }

    }());



    /*-------------END INFRA------------*/

    
    
        $('.slide-block__header').on('click', function () {

            var slideBlock = $(this).closest('.slide-block'),
                content = slideBlock.children('.slide-block__content'),
                open = 'open';

            slideBlock.toggleClass(open);

            if(slideBlock.hasClass(open))
                content.slideDown();
            else
                content.slideUp();
        });


    /*------------PARTNERS--------------*/
    
    
    (function () {
        
        
        var tabs = $('.partners-page .gallery__tab'),
            slideClass = 'slide-block main';
        
        $(window).on('resize', function () {
            
            if($(this).width() <= 1024)
                tabs.addClass(slideClass);
            else
                tabs.removeClass(slideClass);
        }).resize();

        $('.slide-block.main .slide-block__header').on('click', function () {

            var slideBlock = $(this).closest('.slide-block'),
                subBlock = slideBlock.find('.slide-block'),
                content = slideBlock.find('.slide-block__content'),
                open = 'open';

            if(!slideBlock.hasClass(open))
            {
                subBlock.removeClass(open);
                content.slideUp();
            }
        });
        
    }());

    /*--------END PARTNERS--------------*/

    /*------------HOUSE PLAN------------*/
    
    (function () {

        var $flats = $('.house-plan-page .flat'),
            $floors = $('.floor-list__item'),
            $flatInfo = $('.flat-info');

        $(window).on('resize', function () {

            var width = $(window).width();

            if(width > 1024)
            {
                $flats.on('mouseenter', function () {

                    var $self = $(this),
                        floorNum = $self.closest('.floor-row').data('floor');

                    $flatInfo.removeClass('show');
                    $self.find('.flat-info').addClass('show');

                    $floors.removeClass('hover');
                    $('.floor-' + floorNum).addClass('hover');

                }).on('mouseleave', function () {
                    $floors.removeClass('hover');
                    $flatInfo.removeClass('show');
                });
            }

            

        }).resize();
    }());
    
    /*--------END HOUSE PLAN------------*/

    /*--------------HISTORY------------*/
    
    
    (function () {
        
        
        $('.history-page .txt-trigger').on('click', function () {
            
            var $self = $(this),
                $parent = $self.closest('.event__txt');
            
            $parent.toggleClass('open');
            
            $parent.find('.desc').slideToggle();
            
        })
        
        
    }());
    
    
    /*----------END HISTORY------------*/


    /*----------------LOG---------------*/

    (function () {


        var $items = $('.log-page .gallery__item');

        $items.each(function (ind, item) {

            var $item = $(item),
                $percent = $item.find('.percent'),
                id = '#' + $item.find('.progress-bar').attr('id'),
                progress = $item.data('progress') / 100;

            var bar = new ProgressBar.Circle(id, {
                strokeWidth: 1,
                duration: 1400,
                color: '#fff',
                trailColor: 'transparent',
                trailWidth: 1,
                svgStyle: null,
                step: function(state, circle) {
                    
                    var value = Math.round(circle.value() * 100);
                    $percent.html(value + '%')

                }
            });
            bar.animate(progress);
        });


        var $previews = $('.log-page .preview__items'),
            $preview = $('.log-page .preview__item');

        $previews.each(function (ind, el) {

            var $self = $(el),
                $preview = $self.find('.preview__item');


            $preview.first().addClass('hover');

            $preview.on('mouseenter', function () {

                $preview.removeClass('hover');
                $(this).addClass('hover');

            });

        });


        $previews.slick({
            dots: false,
            infinite: false,
            arrows: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            swipeToSlide: true
        });


        $preview.on('click', function () {

            var $self = $(this),
                $items = $self.find('.popup__items'),
                $popup = $self.find('.log-gallery__popup');

            $.magnificPopup.open({
                items: {
                    src: $popup,
                    type: 'inline'
                },
                mainClass: 'log-gallery-mfp',
                callbacks: {
                    open: function() {

                        engageOwlCarousel($items, {

                            items: 1,
                            loop: true,
                            stagePadding: 250,
                            autoWidth: true,
                            // lazyLoad: true,
                            navText: ['', ''],
                            center: true,
                            responsive: {

                                0: {
                                    nav: false
                                },

                                1025: {
                                    nav: true
                                }

                            }

                        });

                    },
                    close: function() {

                        destroyOwlCarousel($items);

                    }
                }
            });
            
            return false;

        });

    }());

    /*------------END LOG---------------*/

});




