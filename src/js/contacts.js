function initMap() {

    google.maps.event.addDomListener(window, 'load', init);

    function init() {

        var psn = new google.maps.LatLng(55.9170407,37.4118087);

        var psnIcon = {
            url: '/img/contacts/psn-pin.png',
            size: new google.maps.Size(75, 105),
            anchor: new google.maps.Point(37, 105)
        };

        var psnPin = new google.maps.Marker({
            icon: psnIcon,
            position: psn,
            zIndex: 999
        });

        mapProp = {
            center: psn,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            },
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            }
        };

        var map = new google.maps.Map(document.getElementById("map"), mapProp);

        var customMapType = new google.maps.StyledMapType([
            {
                featureType: 'all',
                stylers: [
                    {hue: '#c7d3da'},
                    {saturation: -80}
                ]
            }

        ], {
            name: 'Custom Style'
        });
        var customMapTypeId = 'custom_style';
        map.mapTypes.set(customMapTypeId, customMapType);
        map.setMapTypeId(customMapTypeId);

        //центрирование при изменении размера карты
        google.maps.event.addDomListener(window, "resize", function () {
            google.maps.event.trigger(map, "resize");
            map.setCenter(psn);
        });

        psnPin.setMap(map);
    }
}

$(function () {

    if($('#map').length)
        initMap();


    function toggleShowTooltip() {

        var tooltip = $('.map__tooltip');
        var btnClose = tooltip.find('.btn-close');
        var hidden = 'hidden';

        btnClose.on('click', function () {

            tooltip.addClass(hidden);

            setTimeout(function () {
                tooltip.removeClass(hidden);
            }, 5000)

        });



    }

    toggleShowTooltip();

    $('.route-guide .switch-tab').on('click', function () {

        if(!$(this).hasClass('active')){
            $('.gallery__tab').toggleClass('active');
            $('.switch-tab').toggleClass('active');
        }
    });

    engageOwlCarousel($('.big-slider'), {

        items: 1,
        nav: true,
        navText: ['', '']

    })
    
});