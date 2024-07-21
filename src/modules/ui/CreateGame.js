import Player from "../internal/Player"

export const CreateGame = function() {
   

    const createPlayer = function(name) {
        console.log(`${name}-name`)
        const playerName = document.getElementById(`${name}-name`).value ? document.getElementById(name).value: name ;
        const size = [8, 6];
        const realP = true;
        return new Player(playerName, realP, size[0], size[1]);
    }

    let players = {
        player1: createPlayer("player1"),
        player2: createPlayer("player2"),
    };

    return { 
        players
    }
}