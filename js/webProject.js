$(document).ready(() => {

    //Get name of gallery that should be loaded
    const params = (new URL(document.location)).searchParams;
    const project = params.get('id');

    //Read contents of Directory folder and save them to items array
    let items = [];

    $.ajax({
        type: "get",  //type of method
        url: "../php/WebProjects.php",  //php page
        success: function (res) {
            items = JSON.parse(res);

            let info = items.find((item) => {
                if (item.id == project) {
                    return true;
                }
            });

            FillProjectInfo(info);
            AddEventListeners(info)
        }
    });

})

function FillProjectInfo(info) {

    $('#Project_container h1').text(info.name);
    $('#Project_container #description p').html(info.description);

}

function AddEventListeners(info) {
    $('#Project_container button').on('click', () => {
        location.href = "./web.html";
    })

    $('.projectCodeClick').on('click', () => {
        window.open(info.github);
    })

    $('.viewSiteClick').on('click', () => {
        window.open(info.site);
    })
}