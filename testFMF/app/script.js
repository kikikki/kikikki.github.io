$(document).ready(function() {

    $('.burger').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('burger--active');
    });

    $('.burger').click(function(){

        if($(this).hasClass('burger--active')) {
            $('.navigation').css({"height":"450px"});

        }else{
            $('.navigation').css({"height":"0"});
        }
        
    });



});
