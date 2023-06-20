$(document).ready(function(){
  $( function() {
      $( "#draggable" ).draggable();
    } );
// появление текста на секциях

  $('#locations').scroll(function() {
    didScroll = true;
  });

  $('.loc1').fadeOut();
  $('.loc2').fadeOut();
  $('.loc3').fadeOut();
  $('.loc4').fadeOut();
  $("body").scroll(function () {
    if ($(this).scrollLeft() > 1300)  {
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

// горизонтальный скролл

$(function() {
    let scroll = $('#locations');
    let h = scroll.parent().height();
    let w = scroll.parent().width();
    let t = scroll.offset().top;
    let l = scroll.offset().left;
    let vertscroll_wrap = $("<div>").height(h).width("10000").css('position', 'absolute').css('top', t).css('left', l).css('z-index', 1).css('opacity', 0.5).css('overflow-y', 'scroll');
    let vertscroll = $('<div>').height("900vw").css('width', '100%').css('opacity', 0.5);
    vertscroll_wrap.append(vertscroll);
    $('body').append(vertscroll_wrap);
    vertscroll_wrap.scroll(function() {
        $(scroll).parent().scrollLeft($(this).scrollTop());
    });
   vertscroll_wrap.height('100%');
});

let block_show = false;


})
