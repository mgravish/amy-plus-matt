



/*  Menu Buttons  */

$('#rsvp-btn').on('click', function(e) {  // Click RSVP
    
        $('.left-side-takeover-content').css('transform','translateY(0%)');
        $('.left-side-takeover-container').css('visibility','visible');
});


$('#close-rsvp').on('click', function(e) {  // Click to close RSVP

        $('.left-side-takeover-content').css('transform','translateY(-100vh)');
        $('.left-side-takeover-container').css('visibility','hidden');
});


$('#party-btn').on('click', function(e) { // Click Party
    
    //Left Side
        $('#wedding-party-content').css('transform','translateY(0%)');
        $('#wedding-party-content').css('opacity','1.0');
        $('#wedding-party-container').css('background-color','rgba(244,210,186, 0.65)');
        $('#wedding-party-container').css('visibility','visible');
    //Right Side
        $('#wedding-party-detail-container').css('opacity','1.0');
        $('#wedding-party-detail-container').css('visibility','visible');

});


$('#close-party').on('click', function(e) { // Click to close party
    
    //Left Side
        $('#wedding-party-content').css('transform','translateY(-100vh)');
        $('#wedding-party-content').css('opacity','0.0');
        $('#wedding-party-container').css('background-color','rgba(244,210,186, 0)');
        $('#wedding-party-container').css('visibility','hidden');
    //Right Side
        $('#wedding-party-detail-container').css('opacity','0.0');
        $('#wedding-party-detail-container').css('visibility','hidden');
    
});




/*  Wedding Party Image Handlers  */

$('.image-grid').on('click','img',function(e){
    var partyName = this.id;
    var name = "";
    var content = "";
    var title = "";
    var source = "";
    
    //Kelly Bio
    if(partyName=="kelly") {
        var name = "Kelly Havens";
        var title = "Matron of Honor";
        var content = "Kelly is Amy's sister, and has been for her whole life.";
        var source = "imgs/cover/kelly.jpg"
    }
    
    //Isabel Bio
    if(partyName=="isabel") {
        var name = "Isabel Havens";
        var title = "Bridesmaid";
        var content = "Isabel is Amy's other sister. She, too, has been Amy's sister for her whole life. Especially when she was younger.";
    }
    
    //Andi Bio
    if(partyName=="andi") {
        var name = "Andi Dommer";
        var title = "Bridesmaid";
        var content = "Andi is one of Amy's best friends.";
    }
    
    //Leah Bio
    if(partyName=="leah") {
        var name = "Leah Hellerstein";
        var title = "Bridesmaid";
        var content = "Leah is one of Amy's best friends.";
    }
    
    //Nick Bio
    if(partyName=="nick") {
        var name = "Nick Gravish";
        var title = "Groomsman";
        var content = "Nick is Matt's brother.";
    }
    
    
    //Click Handlers
    $('#wedding-party-detail-content .party-detail').remove();
    $('#wedding-party-detail-content').append("<div class='party-detail'><div class='party-detail-name'>"+name+"</div><div class='party-detail-title'>"+title+"</div><p>"+content+"</p></div>");
    $('#cover-image').attr("src", source);
});




/*  Form Submission Functions  */

var $form = $('form#rsvp-form');
var url = 'https://script.google.com/macros/s/AKfycbxiFy960d1e8dLsEAVOxD5pEOIlXrlCvZ0FzYawNr3-fbm73Fq-/exec';

$('#rsvp-form').on('submit',function(e) {
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
            $(btn).hide();
            $('#rsvp-btn').fadeOut('fast');
            $('.form-actions').append("<p class='response' style='display:none; font-size:14px; text-align: center;max-width:none;'>Your RSVP has been sent.<br>Thanks!</p>").find('.response').fadeIn('slow');
            $('#rsvp-form').find("input[type=text], textarea").prop("readonly",true);
            $('#rsvp-form').find("input[type=text], textarea").css({ background:"#fcfcfc" });
           setTimeout(function(){              
                $('.left-side-takeover-content').css('transform','translateY(-100vh)');
                $('.left-side-takeover-container').css('visibility','hidden');
                }, 1800);
            }
        });
        return false;
});