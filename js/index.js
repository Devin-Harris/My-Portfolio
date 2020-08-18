//Hamburger Click animation setup
let tl = new TimelineLite({ paused: true, reversed: true });

//Declare translation
let translation;

// On dom content loaded
$(document).ready(() => {

    //Wait for document to load to set transition
    translation = ($('.B').position().top - $('.T').position().top) / 2 + 'px';

    //Create animation
    tl
        .to($('html'), 0, { overflowY: 'hidden' }, 'start')
        .to($('.T'), 0.5, { rotate: '45deg', y: translation, ease: Power2.easeInOut }, 'start')
        .to($('.M'), 0.5, { autoAlpha: 0 }, 'start')
        .to($('.B'), 0.5, { rotate: '-45deg', y: '-' + translation, ease: Power2.easeInOut }, 'start');

    //Hamburger Click
    $('#Hamburger').on('click', () => {
        HamburgerClick()
    });

    //Button on heading page functions
    ResizeHeadingButton();
    $(window).resize(ResizeHeadingButton);

    //padding to bottom of about section
    $('#about_section').css({
        paddingBottom: $('#about_section_text').height(),
    });

    //Header Logo redirect
    $('nav #HeaderLogo').on('click', () => {
        location.href = "/";
    });

    //Main Heading Button Redirect
    $('#Main_Heading_Text button').on('click', () => {
        location.href = "/#work_section";
    });

    //Click events for commission buttons
    $('.commission_btn').on('click', () => {
        location.href = '/pages/contact.html';
    });

    $('.commission_btn_2').on('click', () => {
        location.href = '/#work_section';
    });


    //Change home screen pic at 600 pixels
    if (($(window).width()) >= 600) {
        ResetHeadingImage();
    }

    $(window).resize(function () {
        ResetHeadingImage();
    });

});

function ResetHeadingImage() {

    if (($(window).width()) >= 600) {
        $('#Main_Heading img').attr('src', "./assets/HomePage/desktop-pic-svg.svg");
    } else {
        $('#Main_Heading img').attr('src', "./assets/HomePage/mobile-pic-svg.svg");
    }

}

function ResizeHeadingButton() {
    $('#Main_Heading_Text button').width($('#Main_Heading_Text h1').width());
}

function HamburgerClick() {

    //Toggle Links
    $('#Links').slideToggle();

    //Change Hamburger
    tl.reversed() ? tl.play() : tl.reverse();

}

//Once Link in ham is clicked trigger animation
$('#Links ul li a').click(() => {

    //Toggle Links
    $('#Links').slideToggle();

    //Reverse ham animation
    if ($(window).width() < 1100) {
        tl.reversed() ? tl.play() : tl.reverse();
    }
});
