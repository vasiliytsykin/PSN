/**
 * Created by Валерий on 23.09.2016.
 */
var patterns = {};
var intro_showing = false;
var patt = [
[
    '<svg version="1.1" id="pattern_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"',
    '    viewBox="0 0 800 230" style="enable-background:new 0 0 800 230;" xml:space="preserve">',
    '<style type="text/css">',
    '   .st0{opacity:0.2;}',
    '   .st1{fill:none;stroke:#00ACC8;stroke-width:7;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}',
    '</style>',
    '<g id="XMLID_461_" class="st0">',
    '   <g id="XMLID_2357_">',
    '      <polyline id="XMLID_2360_" class="st1" points="608.3,71 630.4,48.9 653.4,72       "/>',
    '      <polyline id="XMLID_2359_" class="st1" points="608.3,95.1 630.4,73 653.4,96.1     "/>',
    '      <polyline id="XMLID_2358_" class="st1" points="608.3,119.2 630.4,97.1 653.4,120.2     "/>',
    '   </g>',
    '   <g id="XMLID_2353_">',
    '      <polyline id="XMLID_2356_" class="st1" points="560.6,176.7 582.7,154.6 605.7,177.7        "/>',
    '      <polyline id="XMLID_2355_" class="st1" points="560.6,200.8 582.7,178.7 605.7,201.8        "/>',
    '      <polyline id="XMLID_2354_" class="st1" points="560.6,224.9 582.7,202.8 605.7,225.9        "/>',
    '   </g>',
    '   <g id="XMLID_2349_">',
    '      <polyline id="XMLID_2352_" class="st1" points="680.6,71 702.7,48.9 725.8,72       "/>',
    '      <polyline id="XMLID_2351_" class="st1" points="680.6,95.1 702.7,73 725.8,96.1     "/>',
    '      <polyline id="XMLID_2350_" class="st1" points="680.6,119.2 702.7,97.1 725.8,120.2     "/>',
    '   </g>',
    '   <g id="XMLID_2345_">',
    '      <circle id="XMLID_2348_" class="st1" cx="500.4" cy="95.3" r="11.9"/>',
    '      <circle id="XMLID_2347_" class="st1" cx="553.5" cy="95.3" r="11.9"/>',
    '      <path id="XMLID_2346_" class="st1" d="M525.5,4.1v32.9h-32.9c0,18.2,14.7,32.9,32.9,32.9s32.9-14.7,32.9-32.9S543.6,4.1,525.5,4.1',
    '         z"/>',
    '   </g>',
    '   <g id="XMLID_2341_">',
    '      <polyline id="XMLID_2344_" class="st1" points="788.6,85.9 768,105.4 747.4,85.9        "/>',
    '      <polyline id="XMLID_2343_" class="st1" points="788.6,108.9 768,128.4 747.4,108.9      "/>',
    '      <polygon id="XMLID_2342_" class="st1" points="768,198.2 754.3,145.2 783,145.2     "/>',
    '   </g>',
    '   <line id="XMLID_2340_" class="st1" x1="608.3" y1="119.2" x2="492.4" y2="119.2"/>',
    '   <g id="XMLID_2295_">',
    '      <polyline id="XMLID_2339_" class="st1" points="448.7,132.8 464.4,156.2 436.8,156.2        "/>',
    '      <circle id="XMLID_2302_" class="st1" cx="417.9" cy="119.2" r="14"/>',
    '      <line id="XMLID_2301_" class="st1" x1="414.7" y1="105.1" x2="414.7" y2="74.4"/>',
    '      <line id="XMLID_2300_" class="st1" x1="421" y1="156.2" x2="421" y2="135.5"/>',
    '      <line id="XMLID_2299_" class="st1" x1="408.4" y1="156.2" x2="419.5" y2="156.2"/>',
    '      <line id="XMLID_2298_" class="st1" x1="427.2" y1="108.3" x2="427.2" y2="77.5"/>',
    '      <line id="XMLID_2297_" class="st1" x1="452.1" y1="134.9" x2="458.9" y2="129.8"/>',
    '      <line id="XMLID_2296_" class="st1" x1="413.3" y1="117.5" x2="413.3" y2="117.5"/>',
    '   </g>',
    '   <polyline id="XMLID_2294_" class="st1" points="14.5,139.3 159.1,139.3 199.6,94.1 360.4,94.1    "/>',
    '   <g id="XMLID_1924_">',
    '      <line id="XMLID_2293_" class="st1" x1="65.7" y1="82.4" x2="65.7" y2="82.4"/>',
    '      <line id="XMLID_1940_" class="st1" x1="45.6" y1="137.9" x2="45.6" y2="118.7"/>',
    '      <line id="XMLID_1939_" class="st1" x1="62" y1="137.9" x2="62" y2="118.7"/>',
    '      <path id="XMLID_1938_" class="st1" d="M100.1,71H80.7c-0.3-0.4-0.5-0.8-0.8-1.2c-3.4-4.5-8-8.1-13.3-10.2L60,69l-35.3,49.7v0h30.7',
    '         c15.6,0,28.5-11.7,30.4-26.8L100.1,71z"/>',
    '   </g>',
    '   <g id="XMLID_1918_">',
    '      <g id="XMLID_1920_">',
    '         <circle id="XMLID_1923_" class="st1" cx="34.4" cy="194.4" r="10.4"/>',
    '         <circle id="XMLID_1921_" class="st1" cx="80.9" cy="194.4" r="10.4"/>',
    '      </g>',
    '      <line id="XMLID_1919_" class="st1" x1="103.9" y1="184" x2="11.4" y2="184"/>',
    '   </g>',
    '   <g id="XMLID_462_">',
    '      <circle id="XMLID_1863_" class="st1" cx="315.3" cy="76.8" r="10.4"/>',
    '      <circle id="XMLID_1860_" class="st1" cx="248.3" cy="76.8" r="10.4"/>',
    '      <polyline id="XMLID_1086_" class="st1" points="255.7,50.4 280.7,75.4 302.2,54     "/>',
    '      <line id="XMLID_490_" class="st1" x1="248.3" y1="50.4" x2="268.6" y2="50.4"/>',
    '      <polyline id="XMLID_489_" class="st1" points="315.3,66.4 315.3,32.8 346.3,32.8        "/>',
    '   </g>',
    '</g>',
    '</svg>',
].join(''),

    ['<svg version="1.1" id="Layer_0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"',
        '    viewBox="0 0 520 300" style="enable-background:new 0 0 520 300;" xml:space="preserve">',
        '<style type="text/css">',
        '   .st0{opacity:0.4;}',
        '   .st1{fill:none;stroke:#95D600;stroke-width:7;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}',
        '   .st2{fill:#95D600;}',
        '</style>',
        '<g id="XMLID_66_" class="st0">',
        '   <g id="XMLID_1691_">',
        '      <polyline id="XMLID_1699_" class="st1" points="360.8,258.5 376.6,281.9 349,281.9      "/>',
        '      <circle id="XMLID_1698_" class="st1" cx="330.1" cy="244.8" r="14"/>',
        '      <line id="XMLID_1697_" class="st1" x1="326.9" y1="230.8" x2="326.9" y2="200"/>',
        '      <line id="XMLID_1696_" class="st1" x1="333.2" y1="281.9" x2="333.2" y2="261.1"/>',
        '      <line id="XMLID_1695_" class="st1" x1="320.6" y1="281.9" x2="331.7" y2="281.9"/>',
        '      <line id="XMLID_1694_" class="st1" x1="339.4" y1="233.9" x2="339.4" y2="203.2"/>',
        '      <line id="XMLID_1693_" class="st1" x1="364.3" y1="260.6" x2="371.1" y2="255.5"/>',
        '      <line id="XMLID_1692_" class="st1" x1="325.5" y1="243.2" x2="325.5" y2="243.2"/>',
        '   </g>',
        '   <g id="XMLID_1687_">',
        '      <polyline id="XMLID_1690_" class="st1" points="416.6,229.6 438.6,207.5 461.7,230.6        "/>',
        '      <polyline id="XMLID_1689_" class="st1" points="416.6,253.7 438.6,231.6 461.7,254.7        "/>',
        '      <polyline id="XMLID_1688_" class="st1" points="416.6,277.8 438.6,255.7 461.7,278.8        "/>',
        '   </g>',
        '   <g id="XMLID_1683_">',
        '      <polyline id="XMLID_1686_" class="st1" points="424.7,108.1 446.8,86 469.8,109.1       "/>',
        '      <polyline id="XMLID_1685_" class="st1" points="424.7,132.2 446.8,110.1 469.8,133.2        "/>',
        '      <polyline id="XMLID_1684_" class="st1" points="424.7,156.3 446.8,134.2 469.8,157.3        "/>',
        '   </g>',
        '   <g id="XMLID_1679_">',
        '      <polyline id="XMLID_1682_" class="st1" points="366.1,79.4 388.2,57.3 411.2,80.4       "/>',
        '      <polyline id="XMLID_1681_" class="st1" points="366.1,103.4 388.2,81.4 411.2,104.4     "/>',
        '      <polyline id="XMLID_1680_" class="st1" points="366.1,127.5 388.2,105.4 411.2,128.5        "/>',
        '   </g>',
        '   <g id="XMLID_1675_">',
        '      <polyline id="XMLID_1678_" class="st1" points="204.5,198.7 226.6,176.6 249.7,199.6        "/>',
        '      <polyline id="XMLID_1677_" class="st1" points="204.5,222.7 226.6,200.7 249.7,223.7        "/>',
        '      <polyline id="XMLID_1676_" class="st1" points="204.5,246.8 226.6,224.7 249.7,247.8        "/>',
        '   </g>',
        '   <g id="XMLID_1671_">',
        '      <polyline id="XMLID_1674_" class="st1" points="146.2,198.7 168.3,176.6 191.3,199.6        "/>',
        '      <polyline id="XMLID_1673_" class="st1" points="146.2,222.7 168.3,200.7 191.3,223.7        "/>',
        '      <polyline id="XMLID_1672_" class="st1" points="146.2,246.8 168.3,224.7 191.3,247.8        "/>',
        '   </g>',
        '   <path id="XMLID_1670_" class="st1" d="M9.2,234.9c0,0,49.6,36.4,111,0.3"/>',
        '   <g id="XMLID_1663_">',
        '      <g id="XMLID_1667_">',
        '         <path id="XMLID_1669_" class="st1" d="M64.6,114.5c-6.6,0-10.1,2.8-10.1,10.5c0,9.9,5.8,24,10.1,24c5.1,0,10.1-14.2,10.1-24',
        '            C74.8,117.3,71.3,114.5,64.6,114.5z"/>',
        '         <path id="XMLID_1668_" class="st1" d="M64.6,200c6.6,0,10.1-2.8,10.1-10.5c0-9.9-5.8-24-10.1-24c-5.1,0-10.1,14.2-10.1,24',
        '            C54.5,197.2,58,200,64.6,200z"/>',
        '      </g>',
        '      <g id="XMLID_1664_">',
        '         <path id="XMLID_1666_" class="st1" d="M107.4,157.3c0-6.6-2.8-10.1-10.5-10.1c-9.9,0-24,5.8-24,10.1c0,5.1,14.2,10.1,24,10.1',
        '            C104.6,167.4,107.4,163.9,107.4,157.3z"/>',
        '         <path id="XMLID_1665_" class="st1" d="M21.9,157.3c0,6.6,2.8,10.1,10.5,10.1c9.9,0,24-5.8,24-10.1c0-5.1-14.2-10.1-24-10.1',
        '            C24.7,147.2,21.9,150.6,21.9,157.3z"/>',
        '      </g>',
        '   </g>',
        '   <g id="XMLID_1658_">',
        '      <polyline id="XMLID_1662_" class="st1" points="491.6,19.1 469.5,41.2 446.4,18.1       "/>',
        '      <polyline id="XMLID_1661_" class="st1" points="480.5,63.8 469.2,75.1 457.5,63.3       "/>',
        '      <circle id="XMLID_1660_" class="st1" cx="500.5" cy="44.7" r="10.3"/>',
        '      <circle id="XMLID_1659_" class="st1" cx="439.1" cy="44.7" r="10.3"/>',
        '   </g>',
        '   <g id="XMLID_1653_">',
        '      <line id="XMLID_1657_" class="st1" x1="308.1" y1="128.3" x2="308.1" y2="128.3"/>',
        '      <line id="XMLID_1656_" class="st1" x1="288" y1="183.8" x2="288" y2="164.6"/>',
        '      <line id="XMLID_1655_" class="st1" x1="304.4" y1="183.8" x2="304.4" y2="164.6"/>',
        '      <path id="XMLID_1654_" class="st1" d="M342.5,116.9h-19.4c-0.3-0.4-0.5-0.8-0.8-1.2c-3.4-4.5-8-8.1-13.3-10.2l-6.6,9.4l-35.3,49.7',
        '         v0h30.7c15.6,0,28.5-11.7,30.4-26.8L342.5,116.9z"/>',
        '   </g>',
        '   <path id="XMLID_1652_" class="st1" d="M358.2,169.4c0,0-60.9,8.5-79.7,77.2"/>',
        '   <path id="XMLID_1650_" class="st1" d="M473.5,210.8c0,0-31.1-53.1-101.7-44.3"/>',
        '   <g id="XMLID_929_">',
        '      <circle id="XMLID_1649_" class="st1" cx="148.2" cy="133.5" r="15.5"/>',
        '      <path id="XMLID_1647_" class="st1" d="M180.7,118c4.3,0,7.7,6.9,7.7,15.5c0,8.6-3.5,15.5-7.7,15.5"/>',
        '      <path id="XMLID_1646_" class="st1" d="M197.1,117.6c4.3,0,7.7,7,7.7,15.7c0,8.7-3.5,15.7-7.7,15.7"/>',
        '      <path id="XMLID_1645_" class="st1" d="M200.4,149h-17.3c-8.6,0-15.7-7.1-15.7-15.7l0,0c0-8.6,7.1-15.7,15.7-15.7h17.3',
        '         c8.6,0,15.7,7.1,15.7,15.7l0,0C216.1,141.9,209.1,149,200.4,149z"/>',
        '      <line id="XMLID_1644_" class="st1" x1="182.1" y1="116.2" x2="211.7" y2="94.8"/>',
        '      <line id="XMLID_1643_" class="st1" x1="132.7" y1="133.5" x2="123.4" y2="133.1"/>',
        '      <g id="XMLID_930_">',
        '         <g id="XMLID_931_">',
        '            <g id="XMLID_932_">',
        '               <path id="XMLID_933_" class="st2" d="M143,134.4c-0.9,0-1.8-0.4-2.5-1c-0.7-0.7-1.1-1.6-1.1-2.5c0-0.9,0.4-1.8,1-2.5',
        '                  c1.3-1.3,3.7-1.3,5,0c0.7,0.7,1,1.5,1,2.5c0,0.9-0.4,1.8-1,2.5C144.9,134.1,144,134.4,143,134.4z"/>',
        '            </g>',
        '         </g>',
        '      </g>',
        '   </g>',
        '</g>',
        '</svg>',
    ].join(''),
    ['<svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"',
        '    viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">',
        '<g id="XMLID_1_">',
        '   <g id="XMLID_335_">',
        '      <g id="XMLID_336_">',
        '         <line id="XMLID_340_" class="pattern-yellow stY" x1="53.3" y1="33.7" x2="53.3" y2="33.9"/>',
        '         <line id="XMLID_339_" class="pattern-yellow stY" x1="33.3" y1="89.1" x2="33.3" y2="70"/>',
        '         <line id="XMLID_338_" class="pattern-yellow stY" x1="49.6" y1="89.1" x2="49.6" y2="70"/>',
        '         <path id="XMLID_337_" class="pattern-yellow stY" d="M87.7,22.2H68.3c-0.3-0.4-0.5-0.8-0.8-1.2c-3.4-4.5-8-8.1-13.3-10.2l-6.6,9.4L12.3,70v0H43 c15.6,0,28.5-11.7,30.4-26.8L87.7,22.2z"/>',
        '      </g>',
        '   </g>',
        '</g>',
        '</svg>',
    ].join(''),
    ['<svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"',
        '    viewBox="-99 101 100 100" style="enable-background:new -99 101 100 100;" xml:space="preserve">',
        '<path id="XMLID_1711_" class="pattern-yellow" d="M-49,142.7c5.1,0,10.1-14.2,10.1-24c0-7.6-3.5-10.5-10.1-10.5s-10.1,2.8-10.1,10.5C-59.1,128.6-53.3,142.7-49,142.7"/>',
        '<path id="XMLID_1710_" class="pattern-yellow" d="M-49,159.3c-5.1,0-10.1,14.2-10.1,24c0,7.6,3.5,10.5,10.1,10.5s10.1-2.8,10.1-10.5C-38.9,173.4-44.7,159.3-49,159.3"/>',
        '<path id="XMLID_1708_" class="pattern-yellow" d="M-40.7,151c0,5.1,14.2,10.1,24,10.1c7.6,0,10.5-3.5,10.5-10.1s-2.8-10.1-10.5-10.1C-26.6,140.9-40.7,146.7-40.7,151"/>',
        '<path id="XMLID_1707_" class="pattern-yellow" d="M-57.3,151c0-5.1-14.2-10.1-24-10.1c-7.6,0-10.5,3.5-10.5,10.1s2.8,10.1,10.5,10.1C-71.4,161.1-57.3,155.3-57.3,151"/>',
        '</svg>',
    ].join(''),
    ['<svg version="1.1" id="Layer_4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"',
        '    viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">',
        '<g id="XMLID_379_">',
        '<path xmlns="http://www.w3.org/2000/svg" id="XMLID_1713_" class="pattern-yellow" d="M91,27.2 71.2,47.1 50.5,26.4 29.7,47.1 9,26.4 "/>',
        '<path xmlns="http://www.w3.org/2000/svg" id="XMLID_1712_" class="pattern-yellow" d="M91,53.8 71.2,73.6 50.5,52.9 29.7,73.6 9,52.9 "/>',
        '</g>',
        '</svg>',
    ].join(''),
    ['<svg version="1.1" id="Layer_5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"',
        '    viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">',
        '<polyline id="XMLID_1716_" class="pattern-yellow stY" points="14.9,26.6 61.7,73.4 85.1,50 61.7,26.6 14.9,73.4 "/>',
        '</svg>',
    ].join(''),

    //[''].join(''),
    //[''].join(''),
    //[''].join(''),
    //[''].join(''),
    //[''].join(''),
    //[''].join(''),
    //[''].join(''),
    //[''].join(''),
    //[''].join(''),
    //[''].join(''),
    //[''].join(''),


];

function freeze(el) {
    el.addClass('static');
    el.css({
        'transform': 'translate(0,0)'
    });
}

function unfreeze(el) {
    el.removeClass('static');
}

$(document).ready(function(){

    $.each(patt, function(ind, el){
        $('.pattern-' + ind).append(el);
    });
    setTimeout(function(){
    $('.anim-pattern').find('svg').addClass('pattern-svg');

        $('.anim-pattern svg').each(function(ind, el){
            var id = $(el).attr('id');
            console.log(id);
            var type = (id=='Layer_2'||id=='Layer_3'||id=='Layer_4'||id=='Layer_5'?'fast':'slow');
            patterns[id] = {
                element:new Vivus(id, {type:(type=='fast'?'async':'oneByOne') , duration: (type=='fast'?100:400)}),
                status:true,
                repeat:(type=='fast'?false:true)
            };
        });

console.log(patterns);

        var intervale_anim = setInterval(function(){

            $.each(patterns,function(ind,el){
                if(el.repeat==true){
                    if(el.status==true){
                        el.element.play(-3);
                        el.status = false;
                    }else{
                        el.element.reset().play();
                        el.status = true;
                    }
                }
            });
        },10000)

    },1000);



    $(window).on('resize', function () {

        var el = $('.benefits .circle:nth-child(1)');
        if($(window).width() <= 736)
            freeze(el);
        else
            unfreeze(el)
    });


    $(window).scroll(function(){

        $('.big-figure:not(.static)').each(function(ind, el){

            var windowHeight = $(window).height();
            var scrolled = $(window).scrollTop() + windowHeight;
            var elOffset = $(el).offset().top;

            if(scrolled  > elOffset){
                var top_pos = -200 * ((scrolled - elOffset) / windowHeight);
                $(el).css({
                    transform: ' translateY(' +  top_pos + 'px)'
                });
            }

        }) ;
    });


    var anim_pluse = setInterval(function(){
        $('.btn-cross').toggleClass('anim');
    }, 1000);
//
    if($('body').hasClass('desktop')){
        setTimeout(function(){
            if(!intro_showing){
                start_intro();
                intro_showing = true;
            }
        },3000);


    }else{

        $('.g-intro').hide();

    }





    function start_intro(){

        var draw = SVG('intro-svg'),
            sub = draw.get(2),
            video =  document.getElementById("video2");
        console.log(sub);
        var    circle = sub.get(0).get(0);
        //var circle = document.getElementById('ellipse-img').instance;
        circle.animate(1000).radius(1800);

        setTimeout(function(){
            $('.g-intro').animate({opacity:0},500,function(){
                $('.g-intro').hide();
                video.play();
            });
        },1000);

    }


    $(window).scroll(function(){



    });


});