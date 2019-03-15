(function (jQuery) {
    "use strict";
    // Parallax Backgrounds
    jQuery.stellar({
        horizontalScrolling: false,
        scrollProperty: 'scroll',
        positionProperty: 'position'
    });
    // BG Color & Image
    jQuery('section,div').each(function(){
        var bg_color = jQuery(this).attr("data-color");
        if(bg_color){
            jQuery(this).css("background-color", "" + bg_color + "");
        }
        var url = jQuery(this).attr("data-image");
        if(url){
            jQuery(this).css("background-image", "url(" + url + ")");
        }
    });
    // Site preloader -- also uncomment the div in the header and the css style for #preloader
    jQuery(window).load(function(){
        jQuery('#preloader').fadeOut(
            'slow',
            function(){
                jQuery(this).remove();
            });
    });
    // Animated Progress Bar
    jQuery('.progress-bars').waypoint(function() {
            jQuery('.progress').each(function(){
                jQuery(this).find('.progress-bar').animate({
                    width:jQuery(this).attr('data-percent')
                },200);
            });},
        {
            offset: '100%',
            triggerOnce: true
        });
    // WOW
    new WOW().init();
    // Team Members
    if (jQuery('#js-grid-slider-team').length > 0){
        jQuery('#js-grid-slider-team').cubeportfolio({
            layoutMode: 'slider',
            drag: true,
            auto: false,
            autoTimeout: 5000,
            autoPauseOnHover: true,
            showNavigation: true,
            showPagination: false,
            rewindNav: true,
            scrollByPage: true,
            gridAdjustment: 'responsive',
            mediaQueries: [{
                width: 1500,
                cols: 5,
            }, {
                width: 1100,
                cols: 5,
            }, {
                width: 800,
                cols: 5,
            }, {
                width: 480,
                cols: 2,
                options: {
                    gapVertical: 20,
                }
            }, {
                width: 320,
                cols: 1,
                options: {
                    gapVertical: 20,
                }
            }],
            gapHorizontal: 0,
            gapVertical: 25,
            caption: '',
            displayType: 'fadeIn',
            displayTypeSpeed: 400,
        });
    }
    // Books
    jQuery('.owl-carousel').owlCarousel({
        autoplay: false,
        center: true,
        loop: true,
        items: 5,
        margin: 50,
        nav: false,
        dots: true,
        responsive:{
            1100: {
                items: 5
            },
            768: {
                items: 5
            },
            600: {
                items: 3
            },
            320: {
                items: 3,
                margin: 20
            }
        }
    });
    // Collapse
    jQuery('.navbar-toggle,.navbar-collapse').on('hidden.bs.collapse', function () {
        jQuery('.navbar-static-top').removeClass('topBlack');
        jQuery('.navbar-brand').find('img').attr('src','images/logo.png');
    });
    jQuery('.navbar-toggle,.navbar-collapse').on('show.bs.collapse', function () {
        jQuery('.navbar-static-top').addClass('topBlack');
        jQuery('.navbar-brand').find('img').attr('src','images/mobile-nav.png');
    });
})(jQuery);