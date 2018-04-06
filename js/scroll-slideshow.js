/*  Scroll Slideshow  */

var shrunk = false;

$(document).scroll(function () {
    
    var h = $( document ).height()-400;
    var y = $(this).scrollTop();

    if($( window ).width()<960) {
        if(y>60 && !shrunk) {
            console.log("shrinking");
            shrunk = true;
            $('.left-box').css('height','180');
            $('.left-box').css('box-shadow','0px 0px 73px 0px rgba(0, 0, 0, 0.17)');
            $('.left-box').css('-webkit-box-shadow','0px 0px 73px 0px rgba(0, 0, 0, 0.17)');
            $('.left-box').css('-moz-box-shadow','0px 0px 73px 0px rgba(0, 0, 0, 0.17)');
        }

        if(y<60 && shrunk){
            console.log("at zero");
            shrunk = false;
            $('.left-box').css('height','340');
            $('.left-box').css('box-shadow','0px 0px 73px 0px rgba(0, 0, 0, 0.0)');
            $('.left-box').css('-webkit-box-shadow','0px 0px 73px 0px rgba(0, 0, 0, 0.0)');
            $('.left-box').css('-moz-box-shadow','0px 0px 73px 0px rgba(0, 0, 0, 0.0)');
        }
    }
    
    if (y > h/4) {
        $('#img2').fadeIn({});
    }
    else {$('#img2').fadeOut('fast')};
    
    if (y > 2*(h/4)) {
        $('#img3').fadeIn({});
    }
    else {$('#img3').fadeOut('fast')};
    
    if (y > 3*(h/4)) {
        $('#img4').fadeIn({});
    }
    else {$('#img4').fadeOut('fast')};
});