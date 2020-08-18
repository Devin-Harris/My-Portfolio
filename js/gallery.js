$(document).ready(() => {
    
    //Get name of gallery that should be loaded
    const params = (new URL(document.location)).searchParams;
    const name = params.get('id');

    //Make heading have name based on page to be loaded
    let GalleryName = '';
    switch (name) {
        case 'ads':
            GalleryName = 'Ads / Posters.';
            break;
        case 'logos':
            GalleryName = 'Logo Concepts.';
            break;
        case 'illustrations':
            GalleryName = 'Illustrations.';
            break;
        case 'photos':
            GalleryName = 'Photos.';
            break;
        default:
            break;
    }

    $('#Gallery_Heading h1').text(GalleryName);

    //Begin getting and loading data from php calls
    GetGalleryData(name);

    //Resize button
    ResizeHeadingButton();

});

function GetGalleryData(id) {

    //Read contents of Directory folder and save them to items array
    let items = [];

    $.ajax({
        type: "post",  //type of method
        url: "../php/GalleryLoader.php",  //php page
        data: { name: id },// passing the values
        success: function (res, req) {
            items = JSON.parse(res);
            galleryLoad(items, id);
        }
    });

}

function galleryLoad(items, id) {
    
    let Path = "";

    for (let i = 0; i < items.length; i++) {
        if ((items[i] != "..") && (items[i] != ".")) {

            switch (id) {
                case 'logos':
                    Path = "../assets/Galleries/logos/" + items[i];
                    break;
                case 'illustrations':
                    Path = "../assets/Galleries/illustrations/" + items[i];
                    break;
                case 'ads':
                    Path = "../assets/Galleries/ads/" + items[i];
                    break;
                case 'photos':
                    Path = "../assets/Galleries/photos/" + items[i];
                    break;
                default:
                    console.log('Error: Files not found');
                    break;
            }

            //Create elements
            let aTag = document.createElement("a");
            let imgTag = document.createElement("DIV");
            let iTag = document.createElement("i");

            //Add attributes to elements
            imgTag.classList.add("ImageSet");
            imgTag.style.backgroundImage = `url(${Path})`;
            aTag.href = Path;
            aTag.setAttribute("data-lightbox", "Gallery");
            iTag.setAttribute("class", "fas fa-expand");

            //Append elements
            aTag.append(iTag);
            imgTag.appendChild(aTag);
            $('#gallery').append(imgTag);
        }
    }
}