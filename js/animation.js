// FUNCION PARA SACAR EL MENU RESPOSIVO CON BOTON
function responsiveNavbarFunction() {
  var navbarBox = document.getElementById("navbarBox"),
    navbar = document.getElementById("responsiveBar");
  if (navbarBox.style.opacity === "1") {
    // console.log('Close Box');
    navbarBox.style.opacity = "0";
    navbarBox.style.visibility = "hidden";
    navbar.style.visibility = "visible";
    navbar.style.opacity = "1";
  } else {
    // console.log('Open Box');
    navbarBox.style.visibility = "visible";
    navbarBox.style.opacity = "1";
    navbar.style.opacity = "0";
    navbar.style.visibility = "hidden";
  }
}

// FUNCION QUE CREA EL EFECTO DE HACER NEGRO EL NAVBAR
$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('.flex-container-nav').addClass('black');
  } else {
    $('.flex-container-nav').removeClass('black');
  }
});

// FUNCION TO SCROLL
function cardScroll(idCard, direction) {
  var cards = document.getElementById(idCard);
  const movement = (Math.floor(cards.offsetWidth / 250) * 250);
  direction === 'left' ? cards.scrollLeft -= movement : cards.scrollLeft += movement;
}