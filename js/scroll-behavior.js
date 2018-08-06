/*  Scroll Reminder Widget  */

$(document).ready(function () {
    $("#scroll-text").delay(800).show('drop', {direction:'down', duration: 400}); 
});

var y=0;
$('.left-box').addClass('embiggen');

/*  Scroll Slideshow  */

var shrunk = false;

$(document).scroll(function () {
    $("#scroll-text").fadeOut();
    var h = $( document ).height()-400;
    y = $(this).scrollTop();
    
    var s = $('#story').offset().top;
    var v = $('#venue').offset().top;
    var h2 = $('#hotel').offset().top;
    var f = $('#faq').offset().top;
    
//    console.log(y);
    
    if(y>0) {
        $('.left-box').removeClass('embiggen');
    }
    if(y<=0) {
        $('.left-box').addClass('embiggen');
    }
    
    if (y > s/2) {
        $('.title-block').fadeIn({});
        $('#img2').fadeIn({});
    } else {
        $('#img2').fadeOut('fast');
        $('.title-block').fadeOut('fast');
    };
    
    if (y > v) {
        $('#img3').fadeIn({});
    } else {$('#img3').fadeOut('fast')};
    
    if (y > h2) {
        $('#img4').fadeIn({});
    } else {$('#img4').fadeOut('fast')};
    
    if (y > f) {
        $('#img5').fadeIn({});
    }
    else {$('#img5').fadeOut('fast')};
    
    
});