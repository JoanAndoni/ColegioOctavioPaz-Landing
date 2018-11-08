$(window).on('scroll', function() {
  if ($(window).scrollTop()) {
    $('.flex-container-nav').addClass('black');
  } else {
    $('.flex-container-nav').removeClass('black');
  }
});
