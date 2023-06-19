$(document).ready(function(){

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
