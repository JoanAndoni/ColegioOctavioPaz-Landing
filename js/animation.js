function myFunction() {
    if (document.getElementById("responsiveNavbar").style.transform === "translateX(0%)") {
        document.getElementById("responsiveNavbar").style.transform = "translateX(-100%)";
        document.getElementById("responsiveBar").style.display = "flex";
    } else {
        document.getElementById("responsiveNavbar").style.transform = "translateX(0%)";
        document.getElementById("responsiveBar").style.display = "none";
    }
}

$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('.flex-container-nav').addClass('black');
    } else {
        $('.flex-container-nav').removeClass('black');
    }
});

jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-114667324-1');

function initMap() {
    var myLatLng = {
        lat: 19.4008153,
        lng: -98.9773896
    };
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 16,

        styles: [{
                elementType: 'geometry',
                stylers: [{
                    color: '#f5f5f5'
                }]
            },
            {
                elementType: "labels.icon",
                stylers: [{
                    visibility: 'off'
                }]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#f5f5f5'
                }]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#616161'
                }]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#bdbdbd'
                }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#757575'
                }]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{
                    color: '#eeeeee'
                }]
            },
            {
                featureType: 'poi.business',
                stylers: [{
                    visibility: 'off'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#e5e5e5'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text',
                stylers: [{
                    visibility: 'off'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9e9e9e'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#ffffff'
                }]
            },
            {
                featureType: 'road.arterial',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#757575'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#dadada'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#616161'
                }]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9e9e9e'
                }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{
                    color: '#2f3948'
                }]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{
                    color: '#e5e5e5'
                }]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{
                    color: '#eeeeee'
                }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#c9c9c9'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9e9e9e'
                }]
            }
        ]
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Colegio Hispano Americano Octavio Paz'
    });
}