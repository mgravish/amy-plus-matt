/*  Scroll Slideshow  */

$(document).scroll(function () {
    var h = $( window ).height();
    var y = $(this).scrollTop();
    if (y > h) {
        $('#img2').fadeIn({});
    }
    else {$('#img2').fadeOut('fast')};
    
    if (y > h*2) {
        $('#img3').fadeIn({});
    }
    else {$('#img3').fadeOut('fast')};
    
    if (y > h*3) {
        $('#img4').fadeIn({});
    }
    else {$('#img4').fadeOut('fast')};
});