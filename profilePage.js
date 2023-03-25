$(function(){

    $("ul").hide();
    $("li").hide().css({ opacity: 0 });
    
    var timeoutId;
    
    $(".card1").on("mouseenter", function () {
      timeoutId = setTimeout(function () {
        $("li").fadeTo(2000, 1);
        $("ul").slideDown(2000).show(1000);
      }, 500);
    });
    
    $(".card1").on("mouseleave", function () {
      clearTimeout(timeoutId);
      $("ul").delay(500).slideUp(2000);
    });
    




    $('.card2').click(function() {
        $(this).find('.cover').fadeOut();
      });


      $('.card3').click(function() {
        var coverWidth = $(this).find('.cover1').outerWidth();
        $(this).find('.cover1').animate({left: -coverWidth}, function() {
          $(this).hide();
        });
      });
      
})
