$(document).ready(function() {
    $('#btn1').click(function(){
        $('[class^=container]').css('display','none');
        $('.container2').css('display','flex');
    });

    $('#btn2').click(function(){
        $('[class^=container]').css('display','none');
        $('.container3').css('display','flex');
    });

});