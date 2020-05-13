$(window).resize(ImageResize);

$(document).ready(function () {
    ImageResize();

    //View My Work Action
    $('#viewBtn').on('click', function () {
        $('.card').hide(0);
        $('.card').slideDown(1000).delay(600);
    });

    //Contact Btn on Web Page
    $('#contactBtn').mouseenter(function () {
        $(this).css({
            'backgroundColor': '#30CDFF',
            'cursor': 'pointer',
        });
    });

    $('#contactBtn').mouseleave(function () {
        $(this).css({
            'backgroundColor': '#0C3440',
        });
    });

    //Project Btn CLicks on Web Page
    $('.projectCodeClick, .gitClick').on('click', function(e) {
        let DivId = e.currentTarget.parentElement.parentElement.attributes.id.value
        
        CodeRD(DivId);
    });

    $('.siteClick').on('click', function (e) {
        let DivId = e.currentTarget.parentElement.parentElement.attributes.id.value

        SiteRD(DivId);
    });

});

function ImageResize() {
    //Top Setup
    let Image = $('#Image')
    $('#page-1').height(Image.height());
    $('#page-1').hide(0);
    $('#page-1').slideDown(500);
}

function CodeRD(DivId) {
    switch (DivId) {
        case "Personal-Port":
            window.open('https://github.com/Devin-Harris');
            break;
        case "CrCarving":
            window.open('https://github.com/Devin-Harris');
            break;
        case "Resume":
            window.open('https://github.com/Devin-Harris');
            break;
        default: 
            console.log("Error: Default Case enacted!")
    }
}

function SiteRD(DivId) {
    switch (DivId) {
        case "Personal-Port":
            window.open('https://devinharris.dev/');
            break;
        case "CrCarving":
            window.open('http://crcarving.com/');
            break;
        case "Resume":
            window.open('https://resume.devinharris.dev/');
            break;
        default:
            console.log("Error: Default Case enacted!")
    }
}