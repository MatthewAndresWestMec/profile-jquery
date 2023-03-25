$(function(){


$("ul").hide()
$("li").hide().css({ opacity: 0 })
$(".card1").on( "mouseenter", function(){
    $("li").fadeTo(2000,1);
   $("ul").slideDown(2000).show(1000)});

$(".card1").on( "mouseleave", function(){
$("ul").delay(500).slideUp(2000); 
});
})
