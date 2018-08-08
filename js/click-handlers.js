$("#nav-registry").click(function() {
    window.open('https://www.zola.com/registry/amyandmattregistry', '_blank');
});

$("#nav-faq").click(function() {
    $('html, body').animate({
        scrollTop: $("#faq").offset().top
    }, 2000);
});

$("#nav-hotels").click(function() {
    $('html, body').animate({
        scrollTop: $("#hotel").offset().top
    }, 2000);
});

$('#hamburger').click(function(){
    $('.header-nav').toggleClass('down');
    $("#scroll-text").fadeOut();
})