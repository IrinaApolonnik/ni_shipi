$(document).ready(function(){
  // $(window).scroll(function(){
  //   var scroll = $ (window).scrollTop(),
  //       dh = $(document).height,
  //       wh = $(window).height;
  //       value = (scroll /(dh-wh)) * 100;
  //   $("#locations").css("left", - value * 3 + "%");
  // })
  // $('html, body, *').mousewheel(function(e, delta) {
  //     // multiplying by 40 is the sensitivity,
  //     // increase to scroll faster.
  //     this.scrollLeft -= (delta * 40);
  //     e.preventDefault();
  // });
  // const scrollContainer = document.querySelector("main");
  //
  // scrollContainer.addEventListener("wheel", (evt) => {
  //     evt.preventDefault();
  //     scrollContainer.scrollLeft += evt.deltaY;
  // });

// const element = document.querySelector("#locations");
//
// element.addEventListener('wheel', (event) => {
//   event.preventDefault();
//
//   element.scrollBy({
//     left: event.deltaY < 0 ? -30 : 30,
//
//   });
// });
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




})
