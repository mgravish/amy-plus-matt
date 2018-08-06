/*  Menu Buttons  */
$('#nav-photos').on('click', openPhotos);
$('#nav-rsvp').on('click', openRSVP);
$('#nav-party').on('click', openParty);
$('#party-btn').on('click', openParty);
$('#close-party').on('click', closeParty);

$('#rsvp-btn').on('click', function(e) {  // Click RSVP 
    openRSVP();
});

$('#close-rsvp').on('click', function(e) {  // Click to close RSVP
    closeRSVP();
});

function openParty(){
        $('#right-overlay--party').toggleClass('hidden white-bg');
        $('#left-overlay--party').toggleClass('hidden');
    
        setTimeout( function(){
            $('#left-overlay--party').toggleClass('semi-white-bg');
            $('#right-overlay--party').toggleClass('opacity-1');
        }, 100);
    
        $('#left-content--party').toggleClass('down');
}

function closeParty(){
        
        $('#right-overlay--party').toggleClass('opacity-1');
        $('#left-overlay--party').toggleClass('semi-white-bg');
    
        setTimeout( function(){
            $('#left-overlay--party').toggleClass('hidden');
            $('#right-overlay--party').toggleClass('hidden white-bg');
        }, 500);
    
        $('#left-content--party').toggleClass('down');
        $('.header-nav').toggleClass('down');
}

function openRSVP(){
        $('#rsvp-form').toggleClass('down');
        $('#left-overlay--rsvp').toggleClass('hidden');
        $('#right-overlay--rsvp').toggleClass('hidden');
    
        setTimeout( function(){
            $('#right-overlay--rsvp').toggleClass('opacity-half');
            $('#left-overlay--rsvp').toggleClass('semi-white-bg');

        }, 100);
}

function closeRSVP() {
        $('#rsvp-form').toggleClass('down');
        $('#left-overlay--rsvp').toggleClass('semi-white-bg');
        $('#right-overlay--rsvp').toggleClass('opacity-half');
    
        setTimeout( function(){
            $('#left-overlay--rsvp').toggleClass('hidden');
            $('#right-overlay--rsvp').toggleClass('hidden');
        }, 100);
}

function openPhotos(){
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'imgs/gallery/7.jpg',
            w: 1716,
            h: 1144
        },
        {
            src: 'imgs/gallery/4.jpg',
            w: 763,
            h: 1144
        },
        {
            src: 'imgs/gallery/5.jpg',
            w: 763,
            h: 1144
        },
        {
            src: 'imgs/gallery/6.jpg',
            w: 763,
            h: 1144
        },
        {
            src: 'imgs/gallery/8.jpg',
            w: 763,
            h: 1144
        },
        {
            src: 'imgs/gallery/9.jpg',
            w: 796,
            h: 1193
        },
        {
            src: 'imgs/gallery/10.jpg',
            w: 763,
            h: 1144
        },
        {
            src: 'imgs/gallery/11.jpg',
            w: 1529,
            h: 2048
        },
        {
            src: 'imgs/gallery/12.jpg',
            w: 1080,
            h: 810
        },
        {
            src: 'imgs/gallery/21.jpg',
            w: 858,
            h: 1144
        },
        {
            src: 'imgs/gallery/14.jpg',
            w: 1000,
            h: 1000
        },    
        {
            src: 'imgs/gallery/15.jpg',
            w: 960,
            h: 1280
        },
        {
            src: 'imgs/gallery/16.jpg',
            w: 1280,
            h: 960
        },
        {
            src: 'imgs/gallery/17.jpg',
            w: 1142,
            h: 857
        },
        {
            src: 'imgs/gallery/18.jpg',
            w: 1716,
            h: 1144
        },
        {
            src: 'imgs/gallery/19.jpg',
            w: 1142,
            h: 854
        },
        {
            src: 'imgs/gallery/20.jpg',
            w: 1536,
            h: 2048
        },  
        {
            src: 'imgs/gallery/13.jpg',
            w: 1320,
            h: 990
            
        },  
        {
            src: 'imgs/gallery/22.jpg',
            w: 720,
            h: 1280
        },  
        
        
    ];

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}

/*  Wedding Party Image Handlers  */

$('.flex-row').on('click','div',function(e){
    var partyName = this.id;
    var name = data[partyName].fullname;
    var title = data[partyName].role;
    var content = data[partyName].bio;
    var source = data[partyName].source;
    
    //Click Handlers
    $('.flex-row div').css('opacity', '0.7');
    $('#bio').remove();
    $("<div class='party-detail' id='bio'><div class='party-detail-name'>"+name+"</div><div class='party-detail-title'>"+title+"</div><p>"+content+"</p></div>").hide().appendTo('#wedding-party-detail-content').fadeIn(200);    
    $('#cover-image').attr("src", source);
    $(e.target).css('opacity','1');
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
                var temp = $.ajax({
                    url: 'http://lab.mgravish.com/form-validation/handler.php',
                    method: "GET",
                    dataType: 'json',
                    data: $form.serializeObject(),
                    success: function() { alert('success!'); }
                });
                var btn = $('#submit-form');
                $(btn).attr("disabled","disabled");
                $(btn).css({ border:"none", cursor: "auto", color: "gray"});
                $(btn).hide();
                $('#rsvp-btn').fadeOut('fast');
                $('.form-actions').append("<p class='response' style='display:none; font-size:14px; text-align: center;max-width:none;'>Your RSVP has been sent.<br>Thanks!</p>").find('.response').fadeIn('slow');
                $('#rsvp-form').find("input[type=text], textarea").prop("readonly",true);
                $('#rsvp-form').find("input[type=text], textarea").css({ background:"#fcfcfc" });
                setTimeout(function(){              
                    closeRSVP();
                    }, 1800);
                }
            });
        return false;
});