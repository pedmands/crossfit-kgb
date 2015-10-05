(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*! 
// sCrossfit KGB Javascript
// http://www.crossfitkgb.com
// Copyright 2015 Preston Edmands
// MIT License
**/
$(document).ready(function() {

  "use strict";

  var topOffSet = 50; //variable for menu height
  var slideqty = $('#featured .item').length;
  var wheight = $(window).height(); //get the height of the window
  var randSlide = Math.floor(Math.random()*slideqty);

  $('#featured .item').eq(randSlide).addClass('active');

  $('.fullheight').css('height', wheight -50); //set to window tallness  


  //replace IMG inside carousels with a background image
  $('#featured .item img').each(function() {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
  });

  //adjust height of .fullheight elements on window resize
  $(window).resize(function() {
    wheight = $(window).height(); //get the height of the window
    $('.fullheight').css('height', wheight -50); //set to window tallness  
  });

//Sticky Nav
var stickyNavTop = $('nav').offset().top;


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

  var windowPos = $(window).scrollTop() + topOffSet+10;
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

  if (windowPos > $('#location').offset().top) {
    $('nav li a').removeClass('active');
    $('a[href$="#location"]').addClass('active');
  }

  stickyNav();
  logoBgFader();
});

//Smooth Scrolling
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
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
    pause: false,
    interval: 3000
  });

 

});

},{}]},{},[1])