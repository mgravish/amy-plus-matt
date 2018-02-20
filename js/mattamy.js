var i;
function slideshow(){
    var cont = $(".image-container");
    var counter=1;
    i = setInterval( function(){
        
        var imageUrl = "./slideshow-small/"+counter+".jpg";
        $(cont).css('background-image', 'url(' + imageUrl + ')');
        counter++;
        if(counter === 8) {
            counter=1;
        }
    }, 100);
}

function stop(){
    clearInterval(i);
}

$('.scroll-rsvp').click( function() {
    $('.sub-section, .image-container, .title').show();
    $('.jams-block').hide();
    $('html, body').animate({ scrollTop: $('#rsvp').offset().top }, 800);
});

$('.scroll-venue').click( function() {
    $('.sub-section, .image-container, .title').show();
    $('.jams-block').hide();
    $('html, body').animate({ scrollTop: $('#venue').offset().top }, 800);
});

$('.scroll-hotel').click( function() {
    $('.sub-section, .image-container, .title').show();
    $('.jams-block').hide();
    $('html, body').animate({ scrollTop: $('#hotel').offset().top }, 800);
});

$('.jams').click( function() {
    $('.sub-section, .image-container, .title').hide();
    if ($('.jams-block').length){
        $('.jams-block').show();
    }
    else{
        var embed='<div class="jams-block"><iframe src="https://open.spotify.com/embed?uri=spotify:user:mgravish:playlist:6fR3uAt3ValTuFRN95cRbT&theme=white" width="800" height="380" frameborder="0" allowtransparency="true"></iframe></div>';
        $('body').append(embed);
    }
});

var $form = $('form#rsvp-form');
var url = 'https://script.google.com/macros/s/AKfycbxiFy960d1e8dLsEAVOxD5pEOIlXrlCvZ0FzYawNr3-fbm73Fq-/exec';

$('#submit-form').on('click', function(e) {
      e.preventDefault();
      var jqxhr = $.ajax( {
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject(),
        success: function() { 
            var btn = $('#submit-form');
            $(btn).attr("disabled","disabled");
            $(btn).css({ border:"none", cursor: "auto", color: "gray"});
            $(btn).html("Thanks!");
            $('#rsvp-form').find("input[type=text], textarea").prop("readonly",true);
            $('#rsvp-form').find("input[type=text], textarea").css({ background:"#fcfcfc" });
        }    
    });
});

$(document).ready(function() { // better to use $(document).ready(function(){
    var navdown = false;
    $('.mobile-menu').on('touchend click', function(e) {
            if(e.type == 'touchend'){
                $(this).off('click');
            }
            if(!navdown){
                navdown=true;
            $('.nav-container').animate({
                top: "+=280"
            }, 250, function() {
                // Animation complete.
                
            });}
            else{
                navdown=false;
            $('.nav-container').animate({
                top: "-=280"
            }, 250, function() {
                
            });}
    });
});
    