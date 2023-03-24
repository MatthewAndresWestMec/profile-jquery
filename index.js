$(function(){

$(".posts div").on( "mouseenter", pullUp);
$(".posts div").on( "mouseleave", comeDown);

function pullUp(){
$(this).slideUp(1000);

}
function comeDown(){
$(this).slideDown(1000);
}
})
