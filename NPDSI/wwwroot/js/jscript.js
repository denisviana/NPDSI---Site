/// <reference path="../lib/jquery/dist/jquery.min.js" />
/// <reference path="../lib/jquery/dist/jquery.js" />
/// <reference path="../lib/bootstrap/dist/js/bootstrap.min.js" />
/// <reference path="../lib/bootstrap/dist/js/bootstrap.js" />



$(document).ready(function () {

    var offset = $('#barra-de-menus').offset().top;
    var $barraDeMenus = $('#barra-de-menus');
    $(document).on('scroll', function () {
        console.log($(window).width());

        if (offset <= $(window).scrollTop()) {

            $barraDeMenus.addClass('fixed-top');

        } else {
            $barraDeMenus.removeClass('fixed-top');
        }
    });


    $('.coordenador-npdsi').mouseenter(function () {

        var div = $(this).children().attr("id");

        $('#'+div).fadeIn(200).css("display","block");
    });

    $('.coordenador-npdsi').mouseleave(function () {
      
        var div = $(this).children().attr("id");
        $('#'+div).css("display", "none");

    });

})

function overlayMiniatura(texto) {

    
}


function overlayMiniaturaOut(id, texto) {
    $('#' + id).mouseleave(function () {
        console.log("Mouse fora");
        $('#' + id).css("opacity", "1");
        $('.' + texto).css("display", "none");

    });
}

$('.carousel').carousel({
    interval: 4000
})