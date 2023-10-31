//Typed Text in Header
var typed = new Typed(".mov",{
    strings: ["Student Wirtschaftsinformatik", "Business-Analyst"] ,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true

})

$(document).ready(function () {

    //Hamburger Navigation
    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
    });

    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
    });

    $('#btn-send').click(function(){
        $("#input-name").val("Name und Vorname");
        $("#input-email").val("E-Mail");
        $("#input-text").val("Mitteilung");
        $("#success-message-box").fadeIn(700);
        $("#success-message-box").delay(5000).fadeOut(700);
    });

});


//Progress Bar
//Quelle: https://www.sliderrevolution.com/design/cool-javascript-animations/
var lang = {
    "deutsch": "100%",
    "englisch": "90%",
    "französisch": "80%",
    "arabisch": "100%",
};
var multiply = 4;

$.each( lang, function( language, pourcent) {

        var delay = 700;

        setTimeout(function() {
            $('#'+language+'-pourcent').html(pourcent);
        },delay*multiply);

        multiply++;

    });
