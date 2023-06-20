$(document).ready(function(){
  var $tooltip = $("#tooltip");

  $(document).on("mousemove", function(evt) {
    $tooltip.css({left: evt.pageX, top: evt.pageY});
  });
  $('#locations').hover(function() {
      $('div#tooltip').fadeIn(500)
  }, function() {
      $('div#tooltip').fadeOut(100)
  });

  $('#locations').scroll(function() {
      didScroll = true;
  });

  $('.loc1').fadeOut();
  $('.loc2').fadeOut();
  $('.loc3').fadeOut();
  $('.loc4').fadeOut();
  $("body").scroll(function () {
  if ($(this).scrollLeft() > 1300) {
  $('.loc1').fadeIn();
  }
  else {
  $('.loc1').fadeOut();
  }
  });
  $("body").scroll(function () {
  if ($(this).scrollLeft() > 4400) {
  $('.loc2').fadeIn();
  }
  else {
  $('.loc2').fadeOut();
  }
  });


$(function() {
    var scroll = $('#locations');
    var h = scroll.parent().height();
    var w = scroll.parent().width();
    var t = scroll.offset().top;
    var l = scroll.offset().left;
    var vertscroll_wrap = $("<div>").height(h).width("10000").css('position', 'absolute').css('top', t).css('left', l).css('z-index', 1).css('opacity', 0.5).css('overflow-y', 'scroll');
    var vertscroll = $('<div>').height("900vw").css('width', '100%').css('opacity', 0.5);
    vertscroll_wrap.append(vertscroll);
    $('body').append(vertscroll_wrap);
    vertscroll_wrap.scroll(function() {
        $(scroll).parent().scrollLeft($(this).scrollTop());
    });
   vertscroll_wrap.height('100%');
});

var block_show = false;

// function scrollTracking(){
// 	if (block_show) {
// 		return false;
// 	}
//
// 	var wt = $(window).scrollLeft();
// 	var wh = $(window).width();
// 	var et = $('.active').offset().top;
// 	var eh = $('.active').outerHeight();
// 	var dh = $(document).width();
//
// 	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
// 		block_show = true;
//
// 		// Код анимации
// 		$('.active div:eq(0)').show('fast', function(){
// 			$(this).next().show('fast', arguments.callee);
// 		});
// 	}
// }
//
// $(window).scroll(function(){
// 	scrollTracking();
// });
//
// $(document).ready(function(){
// 	scrollTracking();
// });



})
