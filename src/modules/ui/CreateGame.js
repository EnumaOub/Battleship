import Player from "../internal/Player"
import { ControlGame } from "./ControlGame";

// Function to create and control the game
export const CreateGame = function() {

    // Initialise the object containing the players
    let players = {
        player1: "",
        player2: "",
    };

    // Creation to control object to attack and get results
    const controller = ControlGame();

    // Get the current player and show its name on the front
    const showPlayer = function() {
        const title = document.getElementById("playerG");
        title.textContent = players[getActivePlayer()].name;
    }

    // Generate 3 random ships of length 2 to 5
    const randomShip = function(player, nbShip=3){
        player.board.resetBoard();
        for (let i=0; i<nbShip; i++){
            player.board.addRandomShip(i+2);
        }
    };

    // Create a player using the the inputs in the front
    const createPlayer = function(name, active=false) {
        const playerName = document.getElementById(`${name}-name`).value ? document.getElementById(`${name}-name`).value: name;
        playerName.split(" ").join("")
        const sizeX = document.getElementById('coordX').value;
        const sizeY = document.getElementById('coordY').value;
        const realP = document.getElementById(`${name}-realp`).checked;
        const player = new Player(playerName.split(" ").join(""), realP, sizeX, sizeY);
        if (active) {
            player.toggleActive();
        }
        randomShip(player);
        return player;
    };

    // Check if the 2 players have the same names and update them if it is the case
    // Prevent id colisition in the boards
    const checkPlayersName = function() {
        if (players.player1.name === players.player2.name) {
            players.player1.setName(players.player1.name + "-1");
            players.player2.setName(players.player2.name + "-2");
        }

    };

    // Store players information used in game
    players = {
        player1: createPlayer("player1", true),
        player2: createPlayer("player2"),
    };

    // Get the player which is currently playing
    const getActivePlayer = function() {
        for (const player in players) {
            if (players[player].active) {
                return player;
            }
        }
        return null;
    };

    // Get the player which is not currently playing
    const getNonActivePlayer = function() {
        for (const player in players) {
            if (!players[player].active) {
                return player;
            }
        }
        return null;
    };

    // Alternate active and non active player as well as update the active board
    const changePlayer = function() {
        const playerActive = getActivePlayer();
        const playerNonActive = getNonActivePlayer();
        players[playerActive].toggleActive();
        players[playerNonActive].toggleActive();
        const boardP1 = document.getElementsByClassName(`grid_${players[playerActive].name}`)[0];
        const boardP2 = document.getElementsByClassName(`grid_${players[playerNonActive].name}`)[0];
        boardP1.classList.toggle("active");
        boardP2.classList.toggle("active");
    };

    // Attack from the computer
    const attack = function() {
        if (!players[getActivePlayer()].realP) {
            const resAttack = controller.attackRandom(players[getNonActivePlayer()]);
            checkResAttack(resAttack);
        }
    };

    // Once a player attack wecheck if check if it was a succesful attack and check if the game end
    const checkResAttack = function(resAttack) {
        if (!resAttack) {
            changePlayer();
        }
        showPlayer();
        if (players[getNonActivePlayer()].board.shipAlive === 0){
            endGame();
        }
        else {
            // Use timeout in order to show the computer playing
            setTimeout(function(){attack();}, 100);
        }
    };

    // Function which create a board
    const generateBoard = function(playerName, board, name, playing=true) {
        // Get Board size 
        const rows = board[0].length;
        const cols = board.length;
        // Get div elements where board is located
        const container = document.getElementById(name);
        // Reset the board
        container.innerHTML = "";
        // Add class to this element in order to differentiate the different boards created
        container.className = "";
        container.classList.add(`grid_p`);
        container.classList.add(`grid_${playerName}`);
        // Create the grid
        container.style["grid-template-columns"] = `repeat(${cols}, 2.5rem)`
        container.style["grid-template-rows"] = `repeat(${rows}, 2.5rem)`
        // Populate the board
        for (let row=0; row<rows; row++) {
            for (let col=0; col<cols; col++) {
                const grid_elem = document.createElement("div");
                grid_elem.className = `grid_elem grid_elem_${playerName}`;
                grid_elem.id = `r_${row}_c_${col}`;
                grid_elem.textContent = board[col][row];
                container.appendChild(grid_elem);
            }
        }
        // Add event to the board for when the player is clicking 
        if (playing) {
            container.onclick = function(event) {
                // Check if the coordinate clicked was already used befor attacking the coordinate
                let [yCoord, xCoord] = event.target.id.match(/\d+/g);
                const checkMove = players[getNonActivePlayer()].board.possibleMove.map((elem) => elem.toString()).indexOf([xCoord, yCoord].toString());
                // Morever we also check if the board selected is the active one
                if (event.target.parentElement.classList.contains("active") && checkMove !== -1) {
                    const resAttack = controller.attackC(event, players[getNonActivePlayer()]);
                    checkResAttack(resAttack);
                    event.target.style.cursor = "not-allowed";
                }
            }
        }
    };

    // Start the Game by building the boards and if necessary executing the first attack
    const runGame = function() {
        showPlayer()
        generateBoard(players.player1.name, players.player1.board.boardG, "player1-grid")
        generateBoard(players.player2.name, players.player2.board.boardG, "player2-grid")
        const boardP = document.getElementsByClassName(`grid_${players.player2.name}`)[0]
        boardP.classList.toggle("active");
        if (!players.player1.realP){
            attack()
        }
    }
    
    // Main function selecting the ship for the human players
    const getGame = function() {
        const player1Name = document.getElementById("player1-game-name");
        const player2Name = document.getElementById("player2-game-name");
        checkPlayersName();
        player1Name.textContent = `${players.player1.name} - Board`;
        player2Name.textContent = `${players.player2.name} - Board`;
        if (players.player1.realP && players.player2.realP) {
            const dialogP1 = document.getElementById("player1-ship");
            const buttonRand1 = document.getElementById("rand-ship1");
            const buttonPlay1 = document.getElementById("play1-game");
            randomShip(players.player1);
            generateBoard(players.player1.name, players.player1.board.boardT, "board-ship1", false)
            buttonPlay1.textContent = `Go to ${players.player2.name} Board`
            dialogP1.showModal();
            dialogP1.classList.toggle('show');
    
            buttonRand1.addEventListener("click", (event) => {
                randomShip(players.player1);
                generateBoard(players.player1.name, players.player1.board.boardT, "board-ship1", false)
            })
            
            buttonPlay1.addEventListener("click", (event) => {
                const dialogP2 = document.getElementById("player2-ship");
                const buttonRand2 = document.getElementById("rand-ship2");
                const buttonPlay2 = document.getElementById("play2-game");
                dialogP1.close();
                randomShip(players.player2);
                generateBoard(players.player2.name, players.player2.board.boardT, "board-ship2", false)
                dialogP2.showModal();
                dialogP2.classList.toggle('show');
                buttonRand2.addEventListener("click", (event) => {
                    randomShip(players.player2);
                    generateBoard(players.player2.name, players.player2.board.boardT, "board-ship2", false)
                })
                buttonPlay2.addEventListener("click", (event) => {
                    dialogP2.close();
                    runGame();
                })
            })
        }
        else if (players.player1.realP) {
            const dialogP1 = document.getElementById("player1-ship");
            const buttonRand1 = document.getElementById("rand-ship1");
            const buttonPlay1 = document.getElementById("play1-game");
            randomShip(players.player2);
            generateBoard(players.player1.name, players.player1.board.boardT, "board-ship1", false)
            buttonPlay1.textContent = `Play Game`
            dialogP1.showModal();
            dialogP1.classList.toggle('show');
            buttonRand1.addEventListener("click", (event) => {
                randomShip(players.player1);
                generateBoard(players.player1.name, players.player1.board.boardT, "board-ship1", false)
            })
            buttonPlay1.addEventListener("click", (event) => {
                dialogP1.close();
                runGame();
            })
        }
        else if (players.player2.realP) {
            const dialogP2 = document.getElementById("player2-ship");
            const buttonRand2 = document.getElementById("rand-ship2");
            const buttonPlay2 = document.getElementById("play2-game");
            randomShip(players.player1);
            generateBoard(players.player2.name, players.player2.board.boardT, "board-ship2", false)
            dialogP2.showModal();
            dialogP2.classList.toggle('show');
            buttonRand2.addEventListener("click", (event) => {
                randomShip(players.player2);
                generateBoard(players.player2.name, players.player2.board.boardT, "board-ship2", false)
            })
            buttonPlay2.addEventListener("click", (event) => {
                dialogP2.close();
                runGame();
            })
        }
        else {
            randomShip(players.player1);
            randomShip(players.player2);
            runGame();
        }
    } 

    // Function Ending the game
    const endGame = function() {
        const playerWin = players[getActivePlayer()];
        const playerLoss = players[getNonActivePlayer()];
        
        document.getElementsByClassName(`grid_${playerLoss.name}`)[0].className = "grid_NOT";
        document.getElementsByClassName(`grid_${playerWin.name}`)[0].className = "grid_NOT win";

        document.getElementById("info-r").textContent = `${playerWin.name} win !!!`
    };
    

    return { 
        getGame,
        generateBoard
    };
};