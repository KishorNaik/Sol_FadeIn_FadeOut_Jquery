/// <reference path='./jquery-3.4.1.min.js'/>

$(document).ready(function(){

    console.log("Dom is ready");

    $("#btnFadeIn").on("click",function(){

        $("#divRed").fadeIn();
        $("#divGreen").fadeIn("slow"); // fast
        $("#divYellow").fadeIn(3000);

    });

    $("#btnFadeOut").on("click",function(){

        $("#divRed").fadeOut();
        $("#divGreen").fadeOut("slow"); // fast
        $("#divYellow").fadeOut(3000);

    });

    $("#btnFadeToggle").on("click",function(){

        $("#divRed").fadeToggle();
        $("#divGreen").fadeToggle("slow"); // fast
        $("#divYellow").fadeToggle(3000);

    });

});