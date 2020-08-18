<?php

    $projects = [
        [
            'name' => 'Portfolio',
            'id' => 'Portfolio',
            'description' => "My personal portfolio was one of the first projects I attempted. I produced many drafts and revamped it multiple times.The version you are currently viewing is my most current edition.
                            <br><br>This site features a lot of <span>HTML</span> and <span>CSS</span> markup.It also includes a bit of sophisticated <span>Javascript</span> and <span>PHP</span> in order for images to be loaded and placed into the HTML document <span>dynamically</span>.",
            'github' => 'https://github.com/Devin-Harris/My-Portfolio',
            'site' => 'https://devinharris.dev/'
        ],
        [
            'name' => 'Dynamic Gallery Loader',
            'id' => 'GalleryLoader',
            'description' => "This project was my first introduction to <span>server side</span> languages within web developement. This Gallery loader uses <span>ajax</span> to request to a <span>php</span> file where I recieve all the names of every image in a specific folder. The <span>Javascript</span> then renders those images out to the <span>DOM</span> completely <span>dynamically</span>. This helps a lot in a portfolio style website where images may need to be added or removed, and multiple images are within a gallery. This completely removes the need for img tags within a gallery, and allows a person of little to no coding background to edit their portfolio by simply putting images into a folder.",
            'github' => 'https://github.com/Devin-Harris/DynamicGallery',
            'site' => 'https://dynamicgallery.devinharris.dev/'
        ],
        [
            'name' => 'Sorting Algorithm Visualizer',
            'id' => 'Sorting',
            'description' => "This project was my first attempt to understand <span>Sorting Algorithms</span>. I had been interested in learning these algorithms for awhile, but was unable to find courses as a freshman. This project showcases 5 of my favorite sorting algorithms and also visually shows how these algorithms work. This project required a lot of research and built on my skills in <span>javascript</span> and <span>dynamic styling</span>. I show <span>Quick Sort</span>, <span>Selection Sort</span>, <span>Bubble Sort</span>, <span>Merge Sort</span>, and <span>Heap Sort</span> in this project. Along with the appealing visual showcasing the algorithm working, I also include a very ui friendly control panel where you can change the array size, generate a new array, use a different algorithm, change how fast the visual sorts, etc. ",
            'github' => 'https://github.com/Devin-Harris/SortingAlgorithms',
            'site' => 'https://sorting-visualizer.devinharris.dev/'
        ],
        [
            'name' => 'Minesweeper',
            'id' => 'Minesweeper',
            'description' => "This project is a great mixture of game <span>logic</span> and <span>UI</span> design. It used a lot of <span>javascript</span> and <span>jquery</span> to capture all the functionality of a minesweeper game, and allow easy manuevering through the games interface. The goal of the game is to flag every bomb on the board. Left clicking will show how many bombs are surrounding that piece and right clicked will flag and piece as a bomb. If you left click a bomb you will lose, and if you right click a piece that isn't a bomb you will run out of flags and eventually have to click a bomb.",
            'github' => 'https://github.com/Devin-Harris/MineSweeper',
            'site' => 'https://minesweeper.devinharris.dev/'
        ],
        [
            'name' => 'Roadster Recon',
            'id' => 'Roadster',
            'description' => "This project was a improvement to one of my <span>computer science final labs</span>. The goal of the game is to traverse a 15x15 board and find the Roadster piece before the Musk piece finds you. This used a lot of logic and I used a lot of <span>objects</span> in order to save positions of the player and other pieces on the board.",
            'github' => 'https://github.com/Devin-Harris/Roadster-Recon',
            'site' => 'https://roadsterrecon.devinharris.dev/'
        ],
        [
            'name' => 'Connect 4',
            'id' => 'Connect',
            'description' => "This project was an fun way to continue my developement in <span>javascript</span> and <span>jquery</span>. It allows for 2 players to play against each other, or you can play the computer if you want. Alot of the code involved in this project was creating a bot that wasn't placing pieces completely randomly. Their are many functions the bot runs when checking for a new position to place a piece in order to <span>win</span> if it has the opportunity to, <span>block</span> the player from winning, or <span>prevent</span> itself from playing a move that the player could win off of.",
            'github' => 'https://github.com/Devin-Harris/Connect-4',
            'site' => 'https://Connect4.devinharris.dev/'
        ],
        [
            'name' => 'Website for CRCarving',
            'id' => 'CRCarving',
            'description' => "I created this website for a family friend who owns a wood crafts company called <span>CRCarving</span>. I had made a <span>logo</span> for this company in the past and as I got into web developement I was quickly commisioned by them.
                            <br><br>This site was made on wordpress and was one of my first <span>wordpress</span> sites. I had made a few versions of the site in <span>HTML</span> and <span>CSS</span> before, but management of the site was very difficult without the help of a CMS like wordpress.",
            'github' => '',
            'site' => 'http://crcarving.com/'
        ],
        [
            'name' => 'My Resume',
            'id' => 'Resume',
            'description' => "My resume was a simple site I set up to better showcase my web developement skills. This was a relatively simple site to make and didn't require to much complex <span>javascript</span> or <span>css</span> to create.",
            'github' => 'https://github.com/Devin-Harris',
            'site' => 'https://resume.devinharris.dev/'
        ],
        [
            'name' => 'Peg Game',
            'id' => 'Peg',
            'description' => "This project was an exploration into <span>javascript</span> and the functionality I could get out of it. Its a re-creation of the peg style game where you need to have as few pegs remaining at the end of the game. It uses very <span>simple ui</span> and <span>vanilla javascript</span>.",
            'github' => 'https://github.com/Devin-Harris/Peg-Game',
            'site' => 'https://Peg-game.devinharris.dev/'
        ],
        [
            'name' => 'Pong Game',
            'id' => 'Pong',
            'description' => "This project was an even furthur exploration into <span>javascript</span> and <span>jquery</span>. It is a re-creation of the single player pong game where you have to move the paddle across the board and keep the bouncing ball in the air. It uses a lot of sophisticated techniques like <span>objects</span>, <span>functions</span>, <span>timeouts</span>, and tons of <span>jquery</span>.",
            'github' => 'https://github.com/Devin-Harris/Pong-game',
            'site' => 'https://Pong-game.devinharris.dev/'
        ],
        [
            'name' => 'Tic-Tac-Toe',
            'id' => 'Tic-Tac-Toe',
            'description' => "This was just a simple game to show off my <span>javascript</span> and <span>jQuery</span> skills. It includes a bot that places a random O on a 3 x 3 grid, score for number of games the player has won and the computer has won, and rules that can slide into or out of view.",
            'github' => 'https://github.com/Devin-Harris/TicTacToe',
            'site' => 'https://devin-harris.github.io/TicTacToe/'
        ],
    ];    
    
    echo json_encode($projects);