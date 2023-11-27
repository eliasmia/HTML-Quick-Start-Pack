/*===Drop Down Menu===*/
jQuery(document).ready(function () {
    jQuery('.navigation').meanmenu();
});
/*===Top Fix Navi sticky-navigation===*/

jQuery(window).on("load", function () {
    jQuery(".navbar-wrapper").sticky({topSpacing: 0});
});
/*===Back to Top===*/

jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
        jQuery('.scrollup').fadeIn();
    } else {
        jQuery('.scrollup').fadeOut();
    }
});

jQuery('.scrollup').click(function () {
    jQuery("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;

});

//========================
// Carousel
//========================
jQuery(document).ready(function () {
    jQuery('#owl-one').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });
});

jQuery(document).ready(function () {
    jQuery('#owl-two').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });
});

jQuery(document).ready(function () {
    jQuery('#owl-three').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });
});
