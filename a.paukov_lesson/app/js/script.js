$(document).ready(function(){
    $(".slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed:3000,
        autoplayHoverPause: true,
        
    });

    $(".btn-nav").on("click", function() {
        var target = $(this).data("target");
        $(target).slideToggle("slow");

        $(target).toggleClass("navigation__list--open"); 
        
    });
  });