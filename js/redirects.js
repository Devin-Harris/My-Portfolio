//Out of site redirects

function YoutubeRD() {
    window.open("https://www.youtube.com/channel/UCAiBPt7UNw6jYo7RlIYnNcg?view_as=subscriber");
}

function GithubRD() {
    window.open("https://github.com/Devin-Harris");
}

function InstagramRD() {
    window.open("https://www.instagram.com/devinharris_designs/?hl=en");
}

//In site redirects

function HomeRD() {
    location.href = "/";
}

function websRD() {
    location.href = "pages/web.html";
}

let gallery = '';
function GalleryRD(id) {

    //Decide which data to load
    gallery = id.children[0].children[0].id;

    //Move to gallery page
    location.href = "pages/Gallery.html?id=" + gallery;

}
