// FUNCION PARA RECIBIR LOS ESTILOS DE LOS DISTINTOS ELEMENTOS POR ID
function getStyle(id, name) {
  var element = document.getElementById(id);
  return element.currentStyle ? element.currentStyle[name] : window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(name) : null;
}

// FUNCION PARA SACAR EL MENU RESPOSIVO CON BOTON
function responsiveNavbarFunction() {
  if (document.getElementById("responsiveNavbar").style.transform === "translateX(0%)") {
    document.getElementById("responsiveNavbar").style.transform = "translateX(-100%)";
    document.getElementById("responsiveBar").style.display = "flex";
  } else {
    document.getElementById("responsiveNavbar").style.transform = "translateX(0%)";
    document.getElementById("responsiveBar").style.display = "none";
  }
}

var subtitulos = [
  'La mejor educación humanista para tus hijos',
  'Mejor escuela de la zona con educación de vanguardia',
  'Formas de enseñanza del siglo XXI'
]

// FUNCION PARA SHUFFLE LETTERS
var textoTitulo = $("#textoTitulo");
var actual = 0;
textoTitulo.text(subtitulos[0]);

setInterval(function() {
  actual++;
  if (actual >= subtitulos.length) {
    actual = 0;
  }
  textoTitulo.shuffleLetters({
    "text": subtitulos[actual]
  });
}, 4000);

// ALL THE INFORMATION FOR THE POPUP BOX THAT WE ARE OPENING
var information = [
  [
    [
      "Programa oficial de la SEP",
      "Artes",
      "Lenguaje y comunicación",
      "Lógico matemáticas",
      "Ciencias",
      "Psicomotricidad",
      "Lectura y escritura",
      "Inglés",
      "Computación",
      "Natación",
      "Juegos infantiles",
      "Transporte escolar"
    ],
    [
      "Contenido 1",
      "Contenido 2",
      "Contenido 3",
      "Contenido 4",
      "Contenido 5",
      "Contenido 6",
      "Contenido 7",
      "Contenido 8",
      "Contenido 9",
      "Contenido 10",
      "Contenido 11",
      "Contenido 12"
    ]
  ],
  [
    [
      "Programa oficial de la SEP",
      "Talleres",
      "Lenguaje y comunicación",
      "Álgebra",
      "Natación",
      "Inglés",
      "Música",
      "Computación",
      "Transporte escolar"
    ],
    [
      "Contenido 1",
      "Contenido 2",
      "Contenido 3",
      "Contenido 4",
      "Contenido 5",
      "Contenido 6",
      "Contenido 7",
      "Contenido 8",
      "Contenido 9"
    ]
  ],
  [
    [
      "Programa oficial de la SEP",
      "Talleres",
      "Lenguaje y comunicación",
      "Álgebra",
      "Natación",
      "Laboratorio",
      "Robótica",
      "Inglés",
      "Música",
      "Computación",
      "Transporte escolar"
    ],
    [
      "Contenido 1",
      "Contenido 2",
      "Contenido 3",
      "Contenido 4",
      "Contenido 5",
      "Contenido 6",
      "Contenido 7",
      "Contenido 8",
      "Contenido 9",
      "Contenido 10",
      "Contenido 11"
    ]
  ]
];

// VARIABLE GLOBAL PARA SABER QUIEN HACE EL DISPLAY
var whoShow = 0;

// FUNCION PARA UTILIZAR EL POPUP
function popup(indexLevel, indexTitleRow, indexContentRow, indexColumn) {
  var screen = document.getElementsByClassName('align_popup');
  var title = document.getElementById('titlePopup');
  var content = document.getElementById('contentPopup');
  var navbar = document.getElementById('main-navbar');
  var navbarResponsive = document.getElementById('responsive-navbar');

  title.innerHTML = information[indexLevel][indexTitleRow][indexColumn];
  content.innerHTML = information[indexLevel][indexContentRow][indexColumn];

  screen[0].classList.add("appear");
  getStyle
  if (getStyle('main-navbar', 'display') === 'flex') {
    navbar.style.display = "none";
    whoShow = 1; // That means we have to show main-navbar
  } else if (getStyle('responsive-navbar', 'display') === 'flex') {
    navbarResponsive.style.display = "none";
    whoShow = 2; // That means we have to show responsive-navbar
  }
}

// FUNCION PARA CERRAR EL POPUP
function closePopup() {
  var screen = document.getElementsByClassName('align_popup');
  var navbar = document.getElementById('main-navbar');
  var navbarResponsive = document.getElementById('responsive-navbar');

  screen[0].classList.remove("appear");
  if (whoShow === 1) {
    navbar.style.display = "flex";
  } else if (whoShow === 2) {
    navbarResponsive.style.display = "flex";
  }
}

// FUNCION QUE CREA EL EFECTO DE HACER NEGRO EL NAVBAR
$(window).on('scroll', function() {
  if ($(window).scrollTop()) {
    $('.flex-container-nav').addClass('black');
  } else {
    $('.flex-container-nav').removeClass('black');
  }
});

// FUNCION DEL COUNTERUP CON EL TIEMPO DE EJECUCION
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


// FUNCION DE PERSONALIZACION DE GOOGLE MAPS
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
