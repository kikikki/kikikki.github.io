$(document).ready(function(){
    $('.bodies > .person_item').on("click", function(e){
        $(this).parent().children(".person_item").children("span").css('display','none');
        $(this).children("span").css('display','block');
        // $("[name^=green]").css('display','flex');
        $('.faces').css('display','none');
        $('#' + this.id + '_face').css('display','flex');
        $('.faces').children(".person_item").children("span").css('display','none');
        $('#' + this.id + '_face').children('.person_item').first().children("span").css('display','block');
    });
    $('.faces > .person_item').on("click", function(e){
        $(this).parent().children(".person_item").children("span").css('display','none');
        $(this).children("span").css('display','block');
    });
});
