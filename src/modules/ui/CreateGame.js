import Player from "../internal/Player"
import { ControlGame } from "./ControlGame";

export const CreateGame = function() {

    const player1Coord = [
        [[0, 3], [0, 5]],
        [[1, 3], [2, 3]],
        [[4, 1], [4, 3]]
    ];

    const player2Coord = [
        [[0, 3], [0, 5]],
        [[1, 3], [2, 3]],
        [[4, 1], [4, 3]]
    ];


    const controller = ControlGame();
   
    const addShip = function(coord, player) {
        player.board.addShip(coord[0], coord[1])
    };

    const createPlayer = function(name, setCoord, active=false) {
        const playerName = document.getElementById(`${name}-name`).value ? document.getElementById(`${name}-name`).value: name;
        const sizeX = document.getElementById('coordX').value;
        const sizeY = document.getElementById('coordY').value;
        const realP = document.getElementById(`${name}-realp`).checked;
        const player = new Player(playerName, realP, sizeX, sizeY);
        setCoord.forEach((coord) => addShip(coord, player));
        if (active) {
            player.toggleActive();
        }
        return player;
    };

    let players = {
        player1: createPlayer("player1", player1Coord, true),
        player2: createPlayer("player2", player2Coord),
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
        generateBoard(players[getNonActivePlayer()].board.boardG)
        console.log(players)
        if (players[getNonActivePlayer()].board.shipAlive === 0){
            endGame();
        }
        else {
            
            setTimeout(function(){attack();}, 200);
        }
    }


    const generateBoard = function(board) {
        const rows = board[0].length;
        const cols = board.length;
        const container = document.getElementsByClassName("grid")[0];
        container.innerHTML = "";
        container.style["grid-template-columns"] = `repeat(${cols}, 2rem)`
        container.style["grid-template-rows"] = `repeat(${rows}, 2rem)`
        for (let row=0; row<rows; row++) {
            for (let col=0; col<cols; col++) {
                const grid_elem = document.createElement("div");
                grid_elem.className = "grid_elem";
                grid_elem.id = `r_${row}_c_${col}`;
                grid_elem.textContent = board[col][row];
                container.appendChild(grid_elem);
            }
        }
        container.onclick = function(event) {
            const resAttack = controller.attackC(event, players[getNonActivePlayer()]);
            
            checkResAttack(resAttack);
            
        }
    };

    const endGame = function() {
        const container = document.getElementsByClassName("grid")[0];
        const playerWin = players[getActivePlayer()];
        container.innerHTML = "";
        container.textContent = `${playerWin.name} Win the Game`
    }

    const showPlayer = function() {
        const title = document.getElementById("playerG");
        title.textContent = players[getActivePlayer()].name;
    }

    return { 
        players, 
        generateBoard,
        showPlayer,
        getActivePlayer,
        attack
    };
};