//GSAP Animations for Hamburger --------------------------------------------------------------------------
let upper = document.getElementsByClassName('T');
let middle = document.getElementsByClassName('M');
let bottom = document.getElementsByClassName('B');
let hamDiv = document.querySelector('#hamburger');
let linkDiv = document.querySelector('#links');
let Ulist = document.querySelector('ul');
let navLogo = document.querySelector('#nav-logo');
let nav = document.querySelector('nav');
let html = document.querySelector('html');

let links = document.querySelectorAll('#links ul li a');
let linksArray = [];

for (let i = 0; i < links.length; ++i) {
    linksArray.push(links[i]);
}

let tl = new TimelineLite({ paused: true, reversed: true });
let t2 = new TimelineLite({ paused: true, reversed: true });

tl
    .to(html, 0, { overflowY: 'hidden' }, 'start')
    .to(upper, 0.5, { rotate: '45deg', x: 1, y: '1.03rem', ease: Power2.easeInOut }, 'start')
    .to(middle, 0.5, { autoAlpha: 0 }, 'start')
    .to(bottom, 0.5, { rotate: '-45deg', x: 1, y: '-1.03rem', ease: Power2.easeInOut }, 'start');

t2
    .to(nav, 0, { height: '100vh', width: '100vw', position: 'fixed', right: 0, zIndex: 9000 }, 'start')
    .to(Ulist, 0, { flexDirection: 'column', alignItems: 'space-evenly', height: '100vh' }, 'start')
    .to(linksArray, 0, { fontWeight: 700 }, 'start')
    .to(navLogo, 0.2, { opacity: 0, display: 'none' }, "-=0.7")
    .to(linkDiv, 0.2, { height: '100vh', display: 'block', backgroundColor: 'white' })
    .to(Ulist, 0.2, { width: '100vw', left: 0, backgroundColor: '#30CDFF'})
    .to(linksArray, .3, { opacity: 1, color: 'white', padding: '1rem 3rem', borderRadius: '50rem', opacity: 1, fontSize: '2rem', border: '1px solid white', stagger: 0.1 }, '+=.2');


function HamClick() {

    let deviceWidth = screen.width;
    console.log(deviceWidth);

    if (deviceWidth < 1100) {
        tl.reversed() ? tl.play() : tl.reverse();
        t2.reversed() ? t2.play() : t2.reverse();
    }
}
//--------------------------------------------------------------------------------------------------------

//Redirects for any click events across all pages --------------------------------------------------------
function ContactRD(Location) {
    if (Location == 'Home') {
        location.href = "#ContactForm"
    } else {
        location.href = "../index.html#ContactForm"
    }
}

function YoutubeRD() {
    window.open("https://www.youtube.com/channel/UCAiBPt7UNw6jYo7RlIYnNcg?view_as=subscriber");
}

function GithubRD() {
    window.open("https://github.com/Devin-Harris");
}

function InstagramRD() {
    window.open("https://www.instagram.com/devinharris_designs/?hl=en");
}

function HomeRD() {
    location.href = "../index.html";
}

function adsRD() {
    location.href = "Pages/ads.html";
}
function logosRD() {
    location.href = "Pages/logos.html";
}
function illustrationsRD() {
    location.href = "Pages/illustrations.html";
}
function photosRD() {
    location.href = "Pages/photos.html";
}
function websRD() {
    location.href = "Pages/web.html";
}