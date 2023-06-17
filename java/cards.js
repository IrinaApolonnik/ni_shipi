
$(document).ready(function(){
  $(".addtocart").click(function(){
     $(".icon").toggleClass("add");
     $(".butcart").toggleClass("add");
     $(".icon").toggleClass("change");
     $(".addtocart p").toggleClass("change");


     $(".addtocart").toggleClass("back_addtocart");
   });
});
