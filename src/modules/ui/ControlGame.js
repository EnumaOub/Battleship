
// Factory function dealing with the control of the player and the computer
export const ControlGame = function() {
    // Give results to the round actually played
    const dealResult = function(result, nbShip, target, player) {
        const containerInfo = document.getElementById("info-r");
        const playerActive = document.getElementById("playerG").textContent
        // Check if one ship was hit
        if (result) {
            target.classList.toggle("hit");
            if (nbShip === player.board.shipAlive) {
                containerInfo.textContent = `: ${playerActive} Touched`
            }
            else {
                containerInfo.textContent = `: ${playerActive} has sunk a boat`
            }
        }
        else {
            target.classList.toggle("miss");
            containerInfo.textContent = `: ${playerActive} Missed`
            
        }
    }

    // Function attack of a human player
    const attackC = function(event, player) {
        // Get all current ship in order to compare after the attack
        const nbShip = player.board.shipAlive;
        // Get position on front associated with the coordinate clicked by player
        let target = event.target;
        // Check that the coordinate clicked is on the grid
        if (!target.classList.contains(`grid_elem_${player.name}`)) return
        // Extract the coordinate from the id of the grid element
        let [yCoord, xCoord] = target.id.match(/\d+/g);
        // Attack the player's board given
        const result = player.board.receiveAttack([Number(xCoord), Number(yCoord)]);
        // Apply the results
        dealResult(result, nbShip, target, player);
        return result;
    };

    // Function attack of a computer
    const attackRandom = function(player) {
        // Get all current ship in order to compare after the attack
        const nbShip = player.board.shipAlive;
        // Get all possible moves on the board
        const possibleMove = player.board.possibleMove;
        // get one random coordinate in all possible moves
        const coord = possibleMove[Math.floor(Math.random() * possibleMove.length)];
        // Get position on front associated with the coordinate obtained
        const target = document.querySelector(`#r_${coord[1]}_c_${coord[0]}.grid_elem_${player.name}`);
        // Attack the player's board given
        const result = player.board.receiveAttack([Number(coord[0]), Number(coord[1])]);
        // Apply the results
        dealResult(result, nbShip, target, player);
        return result;
    };
    

    return {
        attackC,
        attackRandom
    };
};