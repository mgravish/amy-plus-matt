/*  Scroll Slideshow  */

var shrunk = false;

$(document).scroll(function () {
    
    var h = $( document ).height()-400;
    var y = $(this).scrollTop();
    var s = $('#story').offset().top;
    var v = $('#venue').offset().top;
    var h2 = $('#hotel').offset().top;
    
    if (y > s/2) {
        $('.title-block').fadeIn({});
        $('#img2').fadeIn({});
    }
    else {
        $('#img2').fadeOut('fast');
        $('.title-block').fadeOut('fast');
    };
    
    if (y > v) {
        $('#img3').fadeIn({});
    }
    else {$('#img3').fadeOut('fast')};
    
    if (y > h2) {
        $('#img4').fadeIn({});
    }
    else {$('#img4').fadeOut('fast')};
});