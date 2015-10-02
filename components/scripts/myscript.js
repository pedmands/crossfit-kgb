$(document).ready(function() {

    var topOffSet = 50;

var fullHeight = function() {
  var wheight = $(window).height();
  $('.fullheight').css('height', wheight - 50);
}; // fullHeight

fullHeight();

$(window).resize(function(){
  fullHeight();
  stickyNav();
  logoBgFader();
});

//Sticky Nav
var stickyNavTop = $('.navbar').offset().top;

var stickyNav = function() {
  var scrollTop = $(window).scrollTop();

  if (scrollTop >= stickyNavTop) {
    $('.navbar').addClass('sticky');
    $('#kgb-logo').removeClass('kgb-lg').addClass('kgb-sm');
    $('.main').css('margin-top', topOffSet);
  }else{
    $('.navbar').removeClass('sticky');
    $('#kgb-logo').removeClass('kgb-sm').addClass('kgb-lg');
    $('.main').css('margin-top', 0);
  }
}; //stickyNav

stickyNav();

// Logo Background Fader
var logoBgFader = function() {
  var scrollTop = $(window).scrollTop();

  if (scrollTop >= stickyNavTop) {
    $('.logo-bg').addClass('bg-hide');
  }else{
    $('.logo-bg').removeClass('bg-hide');
  }
}; // logoBgFader

logoBgFader();


// Nav Highlighting
$(window).scroll(function(){

  var windowPos = $(window).scrollTop() + topOffSet;
  $('nav li a').removeClass('active');

  if (windowPos > $('#about').offset().top) {
    $('nav li a').removeClass('active');
    $('a[href$="#about"]').addClass('active');
  }

  if (windowPos > $('#classes').offset().top) {
    $('nav li a').removeClass('active');
    $('a[href$="#classes"]').addClass('active');
  }

  if (windowPos > $('#coaches').offset().top) {
    $('nav li a').removeClass('active');
    $('a[href$="#coaches"]').addClass('active');
  }

    if (windowPos > $('#schedule').offset().top) {
    $('nav li a').removeClass('active');
    $('a[href$="#schedule"]').addClass('active');
  }

  stickyNav();
  logoBgFader();
});

// Carousel
  var slideqty = $('#featured .item').length;
  var randSlide = Math.floor(Math.random()*slideqty);

  $('#featured .item').eq(randSlide).addClass('active');


  //replace IMG inside carousels with a background image
  $('#featured .item img').each(function() {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
  });

    //Automatically generate carousel indicators
  for (var i=0; i < slideqty; i++) {
    var insertText = '<li data-target="#featured" data-slide-to="' + i + '"';
    if (i === randSlide) {
      insertText += ' class="active" ';
    }
    insertText += '></li>';
    $('#featured ol').append(insertText);
  }

  $('.carousel').carousel({
    pause: false
  });



});
