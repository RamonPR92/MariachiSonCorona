var btnColor = "#368a16";
var btnBackGround = "#000000";

$(document).ready(function () {
    //$("#small-logo").hide();

    $("#sliderMariachi").carousel({interval: 1500});

    window.setInterval(parpadear, 500);
    
        $(".menu-icon").on("click", function(){
        $("nav ul").toggleClass("showing");
    });

    $(".img-fluid").addClass("wow fadeIn z-depth-1-half");
    new WOW().init();

});

$(window).on("scroll", function(){
    var nav = $("#nav");
    var altoDeBarra = nav.height();
    var posicionNav = nav.position();

    
    $("#small-logo").css("display", "block-inline");

    //el scroll
    if($(window).scrollTop() >= posicionNav.top){
        addAparienciaAlNav();
    } 
    
    if($(window).scrollTop() <= 170){
        quitarAparienciaAlNav();
    }
});

//
 function addAparienciaAlNav(){
    $('nav').css("top", "0px");
    $('nav').css("left", "0px");
    $('nav').css("position", "fixed");
    $('nav ul').css("background-color", "#000000");
    $('nav ul li').css("border-right", "1px solid #000000");
    $("#menu-navegacion").css("text-align","center");
    //Si la ventana es menor a 580px de ancho, no muestra el 
    //logotipo pequeño, con el efecto scroll
    if($(window).width() <= 580){

    }else{
        $("#small-logo").show().css("position", "fixed");

    }    
};

function quitarAparienciaAlNav(){
    $('nav').css("top", "170px");
    $('nav').css("left", "0px");
    $('nav').css("position", "static");
    $('nav ul li:not(:last-child)').css("border-right", "1px solid #000000");
    $("#menu-navegacion").css("text-align","center");
    $("#small-logo").hide().css("position", "static");
};

function parpadear(){
    var btn_parpadeante = document.getElementById("btn-parpadeante");
    btnColor = (btnColor == "#368a16")? "#000000" : "#368a16";
    btnBackGround = (btnBackGround == "#000000")?"#368a16": "#000000";
    btn_parpadeante.style.color = btnColor;
    btn_parpadeante.style.background = btnBackGround;
}