import Player from "../internal/Player"
import { ControlGame } from "./ControlGame";

// Function to create and control the game
export const CreateGame = function() {

    // Creation to control object to attack and get results
    const controller = ControlGame();

    // Generate 3 random ships of length 2 to 5
    const randomShip = function(player, nbShip=3){
        player.board.resetBoard();
        for (let i=0; i<nbShip; i++){
            player.board.addRandomShip(i+2);
        }
    }

    // Create a player using the the inputs in the front
    const createPlayer = function(name, active=false) {
        const playerName = document.getElementById(`${name}-name`).value ? document.getElementById(`${name}-name`).value: name;
        const sizeX = document.getElementById('coordX').value;
        const sizeY = document.getElementById('coordY').value;
        const realP = document.getElementById(`${name}-realp`).checked;
        const player = new Player(playerName, realP, sizeX, sizeY);
        if (active) {
            player.toggleActive();
        }
        randomShip(player);
        return player;
    };

    let players = {
        player1: createPlayer("player1", true),
        player2: createPlayer("player2"),
    };

    const getActivePlayer = function() {
        for (const player in players) {
            if (players[player].active) {
                return player;
            }
        }
        return null
    };

    const getNonActivePlayer = function() {
        for (const player in players) {
            if (!players[player].active) {
                return player;
            }
        }
        return null
    }

    const changePlayer = function() {
        const playerActive = getActivePlayer();
        const playerNonActive = getNonActivePlayer();
        players[playerActive].toggleActive();
        players[playerNonActive].toggleActive();
        const boardP1 = document.getElementsByClassName(`grid_${players[playerActive].name}`)[0]
        const boardP2 = document.getElementsByClassName(`grid_${players[playerNonActive].name}`)[0]
        boardP1.classList.toggle("active");
        boardP2.classList.toggle("active");
    }

    const attack = function() {
        if (!players[getActivePlayer()].realP) {
            const resAttack = controller.attackRandom(players[getNonActivePlayer()]);
            checkResAttack(resAttack);
            
        }
    }

    const checkResAttack = function(resAttack) {
        if (!resAttack) {
            changePlayer()
        }
        showPlayer()
        if (players[getNonActivePlayer()].board.shipAlive === 0){
            endGame();
        }
        else {
            
            setTimeout(function(){attack();}, 100);
        }
    }


    const generateBoard = function(playerName, board, name) {
        const rows = board[0].length;
        const cols = board.length;
        const container = document.getElementById(name);
        container.innerHTML = "";
        container.classList.add(`grid_p`)
        container.classList.add(`grid_${playerName}`)
        container.style["grid-template-columns"] = `repeat(${cols}, 2rem)`
        container.style["grid-template-rows"] = `repeat(${rows}, 2rem)`
        for (let row=0; row<rows; row++) {
            for (let col=0; col<cols; col++) {
                const grid_elem = document.createElement("div");
                grid_elem.className = `grid_elem grid_elem_${playerName}`;
                grid_elem.id = `r_${row}_c_${col}`;
                grid_elem.textContent = board[col][row];
                container.appendChild(grid_elem);
            }
        }
        container.onclick = function(event) {
            let [yCoord, xCoord] = event.target.id.match(/\d+/g);
            const checkMove = players[getNonActivePlayer()].board.possibleMove.map((elem) => elem.toString()).indexOf([xCoord, yCoord].toString());
            if (event.target.parentElement.classList.contains("active") && checkMove !== -1) {
                const resAttack = controller.attackC(event, players[getNonActivePlayer()]);
            
                checkResAttack(resAttack);
                event.target.style.cursor = "not-allowed";
            }
        }
    };

    const endGame = function() {
        const containerP1 = document.getElementById("player1-grid");
        const containerP2 = document.getElementById("player2-grid");
        const playerWin = players[getActivePlayer()];
        
        document.getElementsByClassName(`grid_${players["player1"].name}`)[0].className = "";
        document.getElementsByClassName(`grid_${players["player2"].name}`)[0].className = "";

        containerP1.innerHTML = "";
        containerP2.innerHTML = "";
        document.getElementById("info-r").textContent = `${playerWin.name} win !!!`
    }

    const showPlayer = function() {
        const title = document.getElementById("playerG");
        title.textContent = players[getActivePlayer()].name;
    }

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
    
    const getGame = function() {
        if (players.player1.realP && players.player2.realP) {
            const dialogP1 = document.getElementById("player1-ship");
            const buttonRand1 = document.getElementById("rand-ship1");
            const buttonPlay1 = document.getElementById("play1-game");
            randomShip(players.player1);
            generateBoard(players.player1.name, players.player1.board.boardT, "board-ship1")
            buttonPlay1.textContent = `Go to ${players.player2.name} Board`
            dialogP1.showModal();
    
            buttonRand1.addEventListener("click", (event) => {
                randomShip(players.player1);
                generateBoard(players.player1.name, players.player1.board.boardT, "board-ship1")
            })
            
            buttonPlay1.addEventListener("click", (event) => {
                const dialogP2 = document.getElementById("player2-ship");
                const buttonRand2 = document.getElementById("rand-ship2");
                const buttonPlay2 = document.getElementById("play2-game");
                dialogP1.close();
                randomShip(players.player2);
                generateBoard(players.player2.name, players.player2.board.boardT, "board-ship2")
                dialogP2.showModal();
                buttonRand2.addEventListener("click", (event) => {
                    randomShip(players.player2);
                    generateBoard(players.player2.name, players.player2.board.boardT, "board-ship2")
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
            generateBoard(players.player1.name, players.player1.board.boardT, "board-ship1")
            buttonPlay1.textContent = `Play Game`
            dialogP1.showModal();
            buttonRand1.addEventListener("click", (event) => {
                randomShip(players.player1);
                generateBoard(players.player1.name, players.player1.board.boardT, "board-ship1")
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
            generateBoard(players.player2.name, players.player2.board.boardT, "board-ship2")
            dialogP2.showModal();
            buttonRand2.addEventListener("click", (event) => {
                randomShip(players.player2);
                generateBoard(players.player2.name, players.player2.board.boardT, "board-ship2")
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
    

    return { 
        players, 
        generateBoard,
        showPlayer,
        getActivePlayer,
        attack,
        randomShip,
        getGame
    };
};