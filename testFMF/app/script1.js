$(document).ready(function() {
    $('#btn1').click(function(){
        $('[class^=container]').css('display','none');
        $('.container2').css('display','flex');
    });

    $('#btn2').click(function(){
        $('[class^=container]').css('display','none');
        $('.container3').css('display','flex');
    });

    $(".form__entry-field").on('input', function() {
      calc();
    });
    $('#radio1').click(function(){
        calc();
    });
    $('#radio2').click(function(){
        calc();
    });

    function calc(){
        let area = $('#num1').val();
        let colPac = $('#num2').val();
        let result;
        
        if(area && colPac){
            result = area/colPac;
            if( $('#radio2').prop("checked") ){
                result += result * 0.15;
            }
            result = Math.ceil(result);  
            $('.form__result').html(result);
        }
    }

});