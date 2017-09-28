$(document).ready(function(){
    $('#addclass').click(function(){
        if($('#red').css('color') == "rgb(0, 0, 0)") {
            $("#red").removeClass("black");
            $("#red").addClass("red");
        } else {
            $("#red").removeClass("red");
            $("#red").addClass("black");
        }
    });
    $('#slidetoggle').click(function(){
        $('#hidden').slideToggle('slow');
    });
    $('form').submit(function(){
        return false;
    });
    $('#hide').click(function(){
        $(this).hide();
    });
    $('#hideHeading').click(function(){
        $('#hide').show();
    });
    $('#appendbutton').click(function(){
        $('#append').append("<p>(╯°□°)╯︵ ┻━┻</p>");
    });
    $('#toggle').click(function(){
        $("#lax").toggle();
    });
    $('#beforeafter').click(function(){
        if($("#lax").css('display') == 'none'){
            $('#b_a').after("<h1>Be on your merry way</h1>");
        } else {
            $('#b_a').before("<h1>BEWARE the sleeping beast. Come back with a Pokeflute</h1>");
        }
    });

    $('#fade').click(function(){
        if($("#ghost").css('display') == 'none'){
            $('#ghost').fadeIn();
        } else {
            $('#ghost').fadeOut();
        }
    });
    $('#refresh').click(function(){
        location.reload(true);
    });
});