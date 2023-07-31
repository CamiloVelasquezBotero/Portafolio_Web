$(document).ready(function () {
    //Scroll de los menus
    var acercaDe = $('#acercaDe').offset().top,
        certificados = $('#certificados').offset().top,
        contacto = $('#contacto').offset().top;

// ------- Menus -----
    $('#btnAcercaDe').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe - 100
        }, 500);
    });
    $('#btnCertificados').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: certificados
        }, 500);
    });
    $('#btnContacto').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto
        }, 500);
    });

// ------- Volver al inicio -----
    $("#btnRegresar").hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#btnRegresar').fadeIn();
        } else {
            $('#btnRegresar').fadeOut();
        }
    });

    $('#btnRegresar').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0 
        }, 500);
    });

// ------- Evitar redireccionamiento de logos
    $('#btnLogo').on('click', function (e) {
        e.preventDefault();
    });
    $('#btnLogo1').on('click', function (e) {
        e.preventDefault();
    });
});