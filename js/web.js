

$(document).ready(() => {

    //Read contents of Directory folder and save them to items array
    let items = [];

    $.ajax({
        type: "get",  //type of method
        url: "../php/WebProjects.php",  //php page
        success: function (res) {
            items = JSON.parse(res);
            FillProjects(items);

            //Redirect if card click
            $('.card').on('click', function () {

                //Decide which data to load
                let project = this.children[0].children[0].id;

                //Move to gallery page
                location.href = "./webProject.html?id=" + project;

            });
        }
    });

    
    
    

});

function FillProjects(projects) {

    for (let i = 0; i < projects.length; i++) {

        //Create elements with ids
        let card = document.createElement('div');
        card.classList.add('card');

        let top_card = document.createElement('div');
        top_card.classList.add('topcard');

        let top_id_div = document.createElement('div');
        top_id_div.setAttribute('id', projects[i].id);

        let i_hover = document.createElement('i');
        i_hover.classList.add('fas');
        i_hover.classList.add('fa-mouse-pointer');

        let bottom_card = document.createElement('div');
        bottom_card.classList.add('bottomcard');

        let h1_bottom = document.createElement('h1');
        $(h1_bottom).text(projects[i].name);

        //Append all elements
        top_id_div.appendChild(i_hover);
        top_card.appendChild(top_id_div);
        bottom_card.appendChild(h1_bottom);
        card.appendChild(top_card);
        card.appendChild(bottom_card);

        $('#web_panels_container').append(card);
    }
}

/*

JSON EXPECTED BACK FROM AJAX GET REQUEST

let projects = [
    {
        name: 'Portfolio',
        id: 'Portfolio',
        description: `My personal portfolio was one of the first projects I attempted. I produced many drafts and revamped it multiple times.The version you are currently viewing is my most current edition.
                        This site features a lot of HTML and CSS markup.It also includes a bit of sophisticated Javascript and PHP in order for images to be loaded and placed into the HTML document dynamically.`,
        github: 'https://github.com/Devin-Harris/My-Portfolio',
        site: 'https://devinharris.dev/'
    },
    {
        name: 'Dynamic Gallery Loader',
        id: 'GalleryLoader',
        description: `This project was my first introduction to server side languages within web developement. This Gallery loader uses ajax to request to a php file where I recieve all the names of every image in a specific folder. The Javascript then renders those images out to the DOM completely dynamically. This helps a lot in a portfolio style website where images may need to be added or removed, and multiple images are within a gallery. This completely removes the need for img tags within a gallery, and allows a person of little to no coding background to edit their portfolio by simply putting images into a folder.`,
        github: 'https://github.com/Devin-Harris/DynamicGallery',
        site: 'https://dynamicgallery.devinharris.dev/'
    },
    {
        name: 'Minesweeper',
        id: 'Minesweeper',
        description: `This project is a great mixture of game logic and UI design. It used a lot of javascript and jquery to capture all the functionality of a minesweeper game, and allow easy manuevering through the games interface. The goal of the game is to flag every bomb on the board. Left clicking will show how many bombs are surrounding that piece and right clicked will flag and piece as a bomb. If you left click a bomb you will lose, and if you right click a piece that isn't a bomb you will run out of flags and eventually have to click a bomb.`,
        github: 'https://github.com/Devin-Harris/MineSweeper',
        site: 'https://minesweeper.devinharris.dev/'
    },
    {
        name: 'Roadster Recon',
        id: 'Roadster',
        description: `This project was a improvement to one of my computer science final labs. The goal of the game is to traverse a 15x15 board and find the Roadster piece before the Musk piece finds you. This used a lot of logic and I used a lot of objects in order to save positions of the player and other pieces on the board.`,
        github: 'https://github.com/Devin-Harris/Roadster-Recon',
        site: 'https://roadsterrecon.devinharris.dev/'
    },
    {
        name: 'Connect 4',
        id: 'Connect',
        description: `This project was an fun way to continue my developement in javascript and jquery. It allows for 2 players to player against each other, or you can play the computer if you want. Alot of the code involved in this project was creating a bot that wasn't placing pieces completely randomly. Their are many funcitons the bot runs when checking for a new position to place a piece in order to win if it has the opportunity to, block the player from winning, or prevent itself from player a move that the player could win off of.`,
        github: 'https://github.com/Devin-Harris/Connect-4',
        site: 'https://Connect4.devinharris.dev/'
    },
    {
        name: 'Website for CRCarving',
        id: 'CRCarving',
        description: `I created this website for a family friend who owns a wood crafts company called CRCarving. I had made a logo for this company in the past and as I got into web developement I was quickly commisioned by them.
                        This site was made on wordpress and was one of my first wordpress sites. I had made a few versions of the site in HTML and CSS before, but management of the site was very difficult without the help of a CMS like wordpress.`,
        github: '',
        site: 'http://crcarving.com/'
    },
    {
        name: 'My Resume',
        id: 'Resume',
        description: `My resume was a simple site I set up to better showcase my web developement skills. This was a relatively simple site to make and didn't require to much complex javascript or css to create.`,
        github: 'https://github.com/Devin-Harris',
        site: 'https://resume.devinharris.dev/'
    },
    {
        name: 'Peg Game',
        id: 'Peg',
        description: `This project was an exploration into javascript and the functionality I could get out of it. Its a recreation of the peg style game where you need to have as few pegs remaining at the end of the game. it uses very simple ui and vanilla javascript.`,
        github: 'https://github.com/Devin-Harris/Peg-Game',
        site: 'https://Peg-game.devinharris.dev/'
    },
    {
        name: 'Pong Game',
        id: 'Pong',
        description: `This project was an even furthur exploration into javascript and jquery. It is a recreation of the single player pong game where you have to move the paddle across the board and keep the bouncing ball in the air. It uses a lot of sophisticated techniques like objects, functions, timeouts, and tons of jquery.`,
        github: 'https://github.com/Devin-Harris/Pong-game',
        site: 'https://Pong-game.devinharris.dev/'
    },
    {
        name: 'Tic-Tac-Toe',
        id: 'Tic-Tac-Toe',
        description: `This was just a simple game to show off my javascript and jQuery skills. It includes a bot that places a random O on a 3 x 3 grid, score for number of games the player has won and the computer has won, and rules that can slide into or out of view.`,
        github: 'https://github.com/Devin-Harris/TicTacToe',
        site: 'https://devin-harris.github.io/TicTacToe/'
    },
]

*/