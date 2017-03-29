/// <reference path="../lib/jquery/dist/jquery.min.js" />
/// <reference path="../lib/jquery/dist/jquery.js" />
/// <reference path="../lib/bootstrap/dist/js/bootstrap.min.js" />
/// <reference path="../lib/bootstrap/dist/js/bootstrap.js" />

var offset = $('#barra-de-menus').offset().top;
var $barraDeMenus = $('#barra-de-menus');

$(document).ready(function () {

  
        $(document).on('scroll', function () {
            console.log($(window).width());

            if (offset <= $(window).scrollTop()) {

                $barraDeMenus.addClass('fixed-top');
               
            } else {
                $barraDeMenus.removeClass('fixed-top'); 
            }
        });


  
})

function overlayMiniatura(id, texto) {

    $('#' + id).mouseover(function () {
        console.log("Mouse dentro");
        $('#' + id).css("opacity", "0.3");
        $('.' + texto).css("display", "block");

    });
}

function overlayMiniaturaOut(id, texto) {
    $('#' + id).mouseout(function () {
        console.log("Mouse fora");
        $('#' + id).css("opacity", "1");
        $('.' + texto).css("display", "none");


    });
}


$('.carousel').carousel({
    interval: 6000
})

