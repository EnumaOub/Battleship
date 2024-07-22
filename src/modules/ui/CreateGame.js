import Player from "../internal/Player"

export const CreateGame = function() {

    const player1Coord = [
        [[0, 5], [3, 5]],
        [[2, 2], [2, 0]],
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
        player2: createPlayer("player2", player2Coord),
    };

    return { 
        players
    };
};