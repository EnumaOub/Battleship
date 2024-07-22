import Player from "../internal/Player"

export const CreateGame = function() {

    const player1Coord = [
        [[0, 5], [2, 5]],
        [[2, 3], [2, 1]],
        [[4, 1], [4, 5]]
    ];

    const player2Coord = [
        [[3, 1], [0, 1]],
        [[0, 4], [0, 0]],
        [[2, 1], [2, 5]]
    ];
   
    const addShip = function(coord, player) {
        player.board.addShip(coord[0], coord[1])
    };

    const createPlayer = function(name, setCoord) {
        const playerName = document.getElementById(`${name}-name`).value ? document.getElementById(`${name}-name`).value: name;
        const sizeX = document.getElementById('coordX').value;
        const sizeY = document.getElementById('coordY').value;
        const realP = document.getElementById(`${name}-realp`).checked;
        const player = new Player(playerName, realP, sizeX, sizeY);
        setCoord.forEach((coord) => addShip(coord, player));
        return player;
    };

    let players = {
        player1: createPlayer("player1", player1Coord),
        player2: createPlayer("player2", player1Coord),
    };


    const generateTrueBoard = function(player) {
        const board = player.board.boardT;
        const rows = board[0].length;
        const cols = board.length;
        const container = document.getElementsByClassName("grid true")[0];
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
    };

    const generateHiddenBoard = function(player) {
        const board = player.board.boardG;
        const rows = board[0].length;
        const cols = board.length;
        const container = document.getElementsByClassName("grid")[1];
        container.style["grid-template-columns"] = `repeat(${rows}, 2rem)`
        container.style["grid-template-rows"] = `repeat(${cols}, 2rem)`
        for (let row=0; row<rows; row++) {
            for (let col=0; col<cols; col++) {
                const grid_elem = document.createElement("div");
                grid_elem.className = "grid_elem";
                grid_elem.id = `r_${row}_c_${col}`;
                grid_elem.textContent = board[col][row];
                container.appendChild(grid_elem);
            }
        }
    };

    return { 
        players, 
        generateTrueBoard,
        generateHiddenBoard
    };
};