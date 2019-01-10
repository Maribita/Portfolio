$(document).ready(function(){
  /***************/
   $("li").click(function(){
     $("li").removeClass("active");
     $(this).addClass("active animated hinge");
   });
  /******************/
  $("#porfolio").mouseenter(function(){
    $("li").removeClass();
    $(".nav li:nth-child(1)").addClass("active animated hinge");
   });
  /*************/
   $("#about").mouseenter(function(){
    $("li").removeClass();
    $(".nav li:nth-child(2)").addClass("active animated hinge");
   });
  /**************/
  $("#contact").mouseenter(function(){
    $("li").removeClass();
    $(".nav li:nth-child(3)").addClass("active animated hinge");
   });
  /******************/
   $("#main").mouseenter(function(){
    $("li").removeClass();
   });
  /****************/
  $("#in").mouseover(function(){
    $("i").addClass("animated rubberBand");
  });
   $("#in").mouseleave(function(){
    $("i").removeClass("animated rubberBand");
  });
  /*************/
});
