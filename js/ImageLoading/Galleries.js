document.addEventListener('DOMContentLoaded', () => {
    //Find currently loaded page
    let PageName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
    let phpDocPath ="";

    //Decide which php file to run depending on the page currently loaded
    switch(PageName) {
        case 'ads.html':
            phpDocPath = "../php/adsImages.php";
            break;
        case 'logos.html':
            phpDocPath = "../php/logosImages.php";
            break;
        case 'illustrations.html':
            phpDocPath = "../php/illustrationsImages.php";
            break;
        case 'photos.html':
            phpDocPath = "../php/photosImages.php";
            break;
        default:
            console.log("Error: PHP Doc Path can't be defined.");
    }

    let items = [];

    //Read contents of Directory folder and save them to items array
    let httpReq = new XMLHttpRequest();

    httpReq.onload = function () {
        //console.log(JSON.parse(this.responseText));
        items = JSON.parse(this.responseText);
        galleryLoad(items, PageName);
    }
    httpReq.open("GET", phpDocPath, true);
    httpReq.send();
    httpReq.close();
});


//Add each image to the html doc with correct styling and lightbox setup
function galleryLoad(items, PageName) {
    let GalleryDiv = document.querySelector('#gallery');
    let Path ="";

    for (let i = 0; i < items.length; i++) {
        if ((items[i] != "..") && (items[i] != ".")) {

            //Decide which path to use for images
            switch (PageName) {
                case 'ads.html':
                    Path = "../assets/Galleries/ads/" + items[i];
                    break;
                case 'logos.html':
                    Path = "../assets/Galleries/logos/" + items[i];
                    break;
                case 'illustrations.html':
                    Path = "../assets/Galleries/illustrations/" + items[i];
                    break;
                case 'photos.html':
                    Path = "../assets/Galleries/photos/" + items[i];
                    break;
                default:
                    console.log("Error: PHP Doc Path can't be defined.");
            }

            //Create elements
            let aTag = document.createElement("a");
            let imgTag = document.createElement("DIV");
            let iTag = document.createElement("i");

            //Add attributes to elements
            imgTag.classList.add("ImageSet");
            imgTag.style.backgroundImage = "url(" + Path + ")";
            aTag.href = Path;
            aTag.setAttribute("data-lightbox", "adGallery");
            iTag.setAttribute("class", "fas fa-expand");

            //Append elements
            aTag.append(iTag);
            imgTag.appendChild(aTag);
            GalleryDiv.appendChild(imgTag);
        }
    }
}