/// <reference path="../lib/jquery/dist/jquery.min.js" />
/// <reference path="../lib/jquery/dist/jquery.js" />
/// <reference path="../lib/bootstrap/dist/js/bootstrap.min.js" />
/// <reference path="../lib/bootstrap/dist/js/bootstrap.js" />



$(document).ready(function () {

    /*
    var offset = $('#barra-de-menus').offset().top;
    var $barraDeMenus = $('#barra-de-menus');
    $(document).on('scroll', function () {
        console.log($(window).width());

        if (offset <= $(window).scrollTop()) {

            $barraDeMenus.addClass('fixed-top');

        } else {
            $barraDeMenus.removeClass('fixed-top');
        }
    }); */


    /* Retrair menu collapse no celular ao clicar em um item*/
    $(".navbar-nav li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    })

        /* Efeito overlay nas imagens quando posicionar o mouse em cima*/
        $('.coordenador-npdsi').mouseenter(function () {
            console.log("Mouse enter");
            var div = $(this).children().attr("id");

            $('#' + div).fadeIn(200).css("display", "block");
        });

        /* Remove efeito overlay ao retirar imagem*/
        $('.coordenador-npdsi').mouseleave(function () {
            console.log("Mouse leave");
            var div = $(this).children().attr("id");
            $('#' + div).css("display", "none");

        });

    

    $('.carousel').carousel({
        interval: 6000
    });

});