// FUNCION PARA SACAR EL MENU RESPOSIVO CON BOTON
function responsiveNavbarFunction() {
  if (document.getElementById("navbarBox").style.opacity === "1") {
    // console.log('Close Box');
    document.getElementById("navbarBox").style.opacity = "0";
    document.getElementById("navbarBox").style.visibility = "hidden";
    document.getElementById("responsiveBar").style.visibility = "visible";
    document.getElementById("responsiveBar").style.opacity = "1";
  } else {
    // console.log('Open Box');
    document.getElementById("navbarBox").style.visibility = "visible";
    document.getElementById("navbarBox").style.opacity = "1";
    document.getElementById("responsiveBar").style.opacity = "0";
    document.getElementById("responsiveBar").style.visibility = "hidden";
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