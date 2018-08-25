/*
 *****************************************************
 *	CUSTOM JS DOCUMENT                               *
 *	Single window load event                         *
 *   "use strict" mode on                            *
 *****************************************************
 */
 
$(window).on("load", function() {

    "use strict";


    var preLoader = $('.preloader');
    var countNumber = $(".count-number");
    var faqsAccordion = $('#faqs-accordion');

    // ============================================
    // PreLoader On window Load
    // =============================================

    preLoader.addClass('loaderout');

    // ============================================
    // Fun Factor / Counter
    // =============================================	

    countNumber.appear(function() {
        $(this).each(function() {
            var datacount = $(this).attr('data-count');
            $(this).find('.counter').delay(6000).countTo({
                from: 10,
                to: datacount,
                speed: 3000,
                refreshInterval: 50,
            });
        });
    });


    //========================================
    // Accordion 
    //======================================== 	

    if (faqsAccordion.length) {
        faqsAccordion.accordion();
    }

    //***************************************
    // Map initialization function Calling
    //****************************************

    initMap();


    //***************************************
    // All Owl Carousel function Calling
    //****************************************

    owlCarouselInit();


}); // End of the window load event


//***************************************
// Contact Page Map
//****************************************  

function initMap() {
    "use strict";

    var mapDiv = $('#gmap_canvas');

    if (mapDiv.length) {
        var myOptions = {
            zoom: 10,
            scrollwheel: false,
            draggable: true,
            center: new google.maps.LatLng(-37.81614570000001, 144.95570680000003),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
        var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(-37.81614570000001, 144.95570680000003)
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<strong>Envato</strong><br>Envato, King Street, Melbourne, Victoria<br>'
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });

        infowindow.open(map, marker);
    }

}


/* ---------------------	
All owl Carousels 
/* --------------------- */
function owlCarouselInit() {

    "use strict";

    //==========================================
    // owl carousels settings
    //===========================================

    var singleSlide = $('.single-slide');
    var testimonialSection2 = $('#testimonial-section2');
    var teamCarousel = $("#team-carousel");
    var waPartnerCarousel = $('.wa-partner-carousel');

    if (singleSlide.length) {
        singleSlide.owlCarousel({
            autoPlay: true,
            items: 1,
            singleItem: true,
            navigation: true,
            pagination: false,

        });
    }

    if (testimonialSection2.length) {
        testimonialSection2.owlCarousel({
            autoPlay: false,
            items: 3,
            navigation: true,
            pagination: false,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 2],
            itemsMobile: [479, 1]

        });
    }

    if (teamCarousel.length) {
        teamCarousel.owlCarousel({
            autoPlay: false,
            items: 4,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3],
            navigation: true,
            pagination: false

        });
    }

    if (waPartnerCarousel.length) {
        waPartnerCarousel.owlCarousel({
            autoPlay: false,
            items: 4,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            margin: 5,
            navigation: false,
            pagination: true

        });
    }

}