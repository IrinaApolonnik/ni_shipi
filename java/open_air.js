$(document).ready(function(){
  $( function() {
      $( ".draggable" ).draggable();
    } );
// появление текста на секциях

  $('#locations').scroll(function() {
    didScroll = true;
  });

  $('.loc1 h2').fadeOut(20);
  $('.loc1 div:nth-of-type(2)').fadeOut(20);
  $('.loc1 div:nth-of-type(1)').fadeOut(20);
  $('.loc2 h2').fadeOut(20);
  $('.loc2 div:nth-of-type(2)').fadeOut(20);
  $('.loc2 div:nth-of-type(1)').fadeOut(20);
  $('.loc3 h2').fadeOut(20);
  $('.loc3 div:nth-of-type(2)').fadeOut(20);
  $('.loc3 div:nth-of-type(1)').fadeOut(20);
  $('.loc4 h2').fadeOut(20);
  $('.loc4 div:nth-of-type(2)').fadeOut(20);
  $('.loc4 div:nth-of-type(1)').fadeOut(20);
  $("body").scroll(function () {
    if ($(this).scrollLeft() > 1300)  {
      $('.loc1 h2').fadeIn();

    }
    else {
      $('.loc1 h2').fadeOut();

    }
  });
  $("body").scroll(function () {
    if ($(this).scrollLeft() > 2000)  {
      $('.loc1 div:nth-of-type(2)').fadeIn();
    }
    else {
      $('.loc1 div:nth-of-type(2)').fadeOut();
    }
  });
  $("body").scroll(function () {
    if ($(this).scrollLeft() > 2600)  {

      $('.loc1 div:nth-of-type(1)').fadeIn();
    }
    else {

      $('.loc1 div:nth-of-type(1)').fadeOut();
    }
  });
  $("body").scroll(function () {
    if ($(this).scrollLeft() > 4200)  {
      $('.loc2 h2').fadeIn();
      $(".loc1 div").css("z-index","0");
    }
    else {
      $('.loc2 h2').fadeOut();
    }
  });
  $("body").scroll(function () {
    if ($(this).scrollLeft() > 4900)  {
      $('.loc2 div:nth-of-type(2)').fadeIn();
    }
    else {
      $('.loc2 div:nth-of-type(2)').fadeOut();
    }
  });
  $("body").scroll(function () {
    if ($(this).scrollLeft() > 5500)  {
      $('.loc2 div:nth-of-type(1)').fadeIn();
    }
    else {
      $('.loc2 div:nth-of-type(1)').fadeOut();
    }
  });
  $("body").scroll(function () {
    if ($(this).scrollLeft() > 7000)  {
      $('.loc3 h2').fadeIn();
      $(".loc2 div").css("z-index","0");
    }
    else {
      $('.loc3 h2').fadeOut();
    }
  });
  $("body").scroll(function () {
    if ($(this).scrollLeft() > 7700)  {
      $('.loc3 div:nth-of-type(2)').fadeIn();
    }
    else {
      $('.loc3 div:nth-of-type(2)').fadeOut();
    }
  });
  $("body").scroll(function () {
    if ($(this).scrollLeft() > 8300)  {
      $('.loc3 div:nth-of-type(1)').fadeIn();
    }
    else {
      $('.loc3 div:nth-of-type(1)').fadeOut();
    }
  });
  $("body").scroll(function () {
    if ($(this).scrollLeft() > 10000)  {
      $('.loc4 h2').fadeIn();
      $(".loc3 div").css("z-index","0");
    }
    else {
      $('.loc4 h2').fadeOut();
    }
  });
  $("body").scroll(function () {
    if ($(this).scrollLeft() > 10300)  {
      $('.loc4 div:nth-of-type(2)').fadeIn();
    }
    else {
      $('.loc4 div:nth-of-type(2)').fadeOut();
    }
  });
  $("body").scroll(function () {
    if ($(this).scrollLeft() > 10900)  {
      $('.loc4 div:nth-of-type(1)').fadeIn();
    }
    else {
      $('.loc4 div:nth-of-type(1)').fadeOut();
    }
  });
  $("body").scroll(function () {
      $("#walking_cat").css("background-image","url('./images/catgo.svg')");
      setTimeout(function(){
       $("#walking_cat").css("background-image","url('./images/catstop.svg')");
     }, 600);
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
