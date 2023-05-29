
$(document).ready(function(){
  // $(".circlelogo").on({
  //     mouseenter: function () {
  //         $(".logo").css("background-image","url(../images/logob.svg)");
  //         $(this).css("background","(#FF7596");
  //     },
  //     mouseleave: function () {
  //       $(".logo").css("background-image","url(../images/logop.svg)");
  //       $(this).css("background","(#DEFFFF");
  //     }
  // });
  $( "circlelogo" ).hover(function(){ 
    $(".logo").css("background-image","url(../images/logob.svg)");
    $(this).css("background","(#FF7596");
     }, function(){
       $(".logo").css("background-image","url(../images/logop.svg)");
       $(this).css("background","(#DEFFFF");
   });
});
