$(document).ready(function(){
  // перемотка событий
  $(function(){
 	  let count = 1;
      $(".next").click(function() {
         count += 1;
         if (count == 0) {
           $(".meditation, .fluid_art, .gadaniya").css("animation-play-state","paused");
           $(".darken").css("opacity","1");
           $(".bt").css("animation-play-state","running");
           $(".bt .darken").css("opacity","0");
           $(".event_cards").css("transform","translateX(33vw)");
           $(".event_text").css("transform","rotate(-1deg)");
           $(".reg_head").html("БАБЛ-ТАЙМ");
          }
   			  else if (count == 1) {
            $(".bt, .fluid_art, .gadaniya").css("animation-play-state","paused");
            $(".darken").css("opacity","1");
            $(".meditation").css("animation-play-state","running");
            $(".meditation .darken").css("opacity","0");
            $(".event_cards").css("transform","translateX(-1vw)");
            $(".event_text").css("transform","rotate(-95deg)");
            $(".reg_head").html("МЕДИТАЦИИ");
   				  }
   				else if (count == 2) {
            $(".bt, .meditation, .gadaniya").css("animation-play-state","paused");
            $(".darken").css("opacity","1");
            $(".fluid_art").css("animation-play-state","running");
            $(".fluid_art .darken").css("opacity","0");
            $(".event_cards").css("transform","translateX(-35vw)");
            $(".event_text").css("transform","rotate(-190deg)");
            $(".reg_head").html("ФЛЮИД-АРТ");
   				  }
   				else {
            $(".bt, .meditation, .fluid_art").css("animation-play-state","paused");
            $(".darken").css("opacity","1");
            $(".gadaniya").css("animation-play-state","running");
            $(".gadaniya .darken").css("opacity","0");
            $(".event_cards").css("transform","translateX(-69vw)");
            $(".event_text").css("transform","rotate(-276deg)");
            $(".reg_head").html("ГАДАНИЯ");
   				 }
      });
      $(".previous").click(function() {
         count -= 1;
         if (count == 0) {
           $(".meditation, .fluid_art, .gadaniya").css("animation-play-state","paused");
           $(".darken").css("opacity","1");
           $(".bt").css("animation-play-state","running");
           $(".bt .darken").css("opacity","0");
           $(".event_cards").css("transform","translateX(33vw)");
           $(".event_text").css("transform","rotate(-1deg)");
           $(".reg_head").html("БАБЛ-ТАЙМ");
          }
          else if (count == 1) {
            $(".bt, .fluid_art, .gadaniya").css("animation-play-state","paused");
            $(".darken").css("opacity","1");
            $(".meditation").css("animation-play-state","running");
            $(".meditation .darken").css("opacity","0");
            $(".event_cards").css("transform","translateX(-1vw)");
            $(".event_text").css("transform","rotate(-95deg)");
            $(".reg_head").html("МЕДИТАЦИИ");
   				  }
          else if (count == 2) {
            $(".bt, .meditation, .gadaniya").css("animation-play-state","paused");
            $(".darken").css("opacity","1");
            $(".fluid_art").css("animation-play-state","running");
            $(".fluid_art .darken").css("opacity","0");
            $(".event_cards").css("transform","translateX(-35vw)");
            $(".event_text").css("transform","rotate(-190deg)");
            $(".reg_head").html("ФЛЮИД-АРТ");
   				  }
          else if (count == 3) {
            $(".bt, .meditation, .fluid_art").css("animation-play-state","paused");
            $(".darken").css("opacity","1");
            $(".gadaniya").css("animation-play-state","running");
            $(".gadaniya .darken").css("opacity","0");
            $(".event_cards").css("transform","translateX(-69vw)");
            $(".event_text").css("transform","rotate(-276deg)");
            $(".reg_head").html("ГАДАНИЯ");
           }
           else {
             count=0
            }
      });
 	});
  // кнопка регистрации
  $(".registration").click(function(){
     $(".darken_reg").css("z-index","1");
     setTimeout(function(){
       $(".reg_form").css("opacity","1");
			$(".darken_reg").css("opacity","0.7");
		}, 200);
   });
  $(".exit_btn").click(function(){
    $(".reg_form").css("opacity","0");
    $(".darken_reg").css("opacity","0");
    setTimeout(function(){
     $(".darken_reg").css("z-index","-3");
   }, 300);
  });
  $(".reg_btn").click(function(){
     $(".reg_btn").html("Ты записан(а)!");
     $(".reg_btn").css("background-color","#FFDCE9");
   });
   $(".previous").click(function(){
      $(".reg_btn").html("Записаться!");
      $(".reg_btn").css("background-color","#FF7596");
    });
  $(".next").click(function(){
    $(".reg_btn").html("Записаться!");
    $(".reg_btn").css("background-color","#FF7596");
  });
});
