!function a(e,t,s){function o(i,n){if(!t[i]){if(!e[i]){var l="function"==typeof require&&require;if(!n&&l)return l(i,!0);if(r)return r(i,!0);throw new Error("Cannot find module '"+i+"'")}var c=t[i]={exports:{}};e[i][0].call(c.exports,function(a){var t=e[i][1][a];return o(t?t:a)},c,c.exports,a,e,t,s)}return t[i].exports}for(var r="function"==typeof require&&require,i=0;i<s.length;i++)o(s[i]);return o}({1:[function(){$(document).ready(function(){"use strict";var a=50,e=$("#featured .item").length,t=$(window).height(),s=Math.floor(Math.random()*e);$("#featured .item").eq(s).addClass("active"),$(".fullheight").css("height",t-50),$("#featured .item img").each(function(){var a=$(this).attr("src");$(this).parent().css({"background-image":"url("+a+")"}),$(this).remove()}),$(window).resize(function(){t=$(window).height(),$(".fullheight").css("height",t-50)});var o=$("nav").offset().top,r=function(){var e=$(window).scrollTop();e>=o?($(".navbar").addClass("sticky"),$("#kgb-logo").removeClass("kgb-lg").addClass("kgb-sm"),$(".main").css("margin-top",a)):($(".navbar").removeClass("sticky"),$("#kgb-logo").removeClass("kgb-sm").addClass("kgb-lg"),$(".main").css("margin-top",0))};r();var i=function(){var a=$(window).scrollTop();a>=o?$(".logo-bg").addClass("bg-hide"):$(".logo-bg").removeClass("bg-hide")};i(),$(window).scroll(function(){var e=$(window).scrollTop()+a;$("nav li a").removeClass("active"),e>$("#about").offset().top&&($("nav li a").removeClass("active"),$('a[href$="#about"]').addClass("active")),e>$("#classes").offset().top&&($("nav li a").removeClass("active"),$('a[href$="#classes"]').addClass("active")),e>$("#coaches").offset().top&&($("nav li a").removeClass("active"),$('a[href$="#coaches"]').addClass("active")),e>$("#schedule").offset().top&&($("nav li a").removeClass("active"),$('a[href$="#schedule"]').addClass("active")),e>$("#location").offset().top&&($("nav li a").removeClass("active"),$('a[href$="#location"]').addClass("active")),r(),i()}),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html,body").animate({scrollTop:a.offset().top},2e3),!1}});for(var n=0;e>n;n++){var l='<li data-target="#featured" data-slide-to="'+n+'"';n===s&&(l+=' class="active" '),l+="></li>",$("#featured ol").append(l)}$(".carousel").carousel({pause:!1,interval:3e3})})},{}]},{},[1]);