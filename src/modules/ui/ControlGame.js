

export const ControlGame = function() {
    const dealResult = function(result, nbShip, target, player) {
        const containerInfo = document.getElementById("info-r");
        const playerActive = document.getElementById("playerG").textContent
        if (result) {
            target.textContent = "O";
            target.style["background-color"] = "rgba(0,255,0,.3)"
            if (nbShip === player.board.shipAlive) {
                containerInfo.textContent = `: ${playerActive} Touched`
            }
            else {
                containerInfo.textContent = `: ${playerActive} has sunk a boat`
            }
        }
        else {
            target.textContent = "X";
            target.style["background-color"] = "rgba(255,0,0,.3)"
            containerInfo.textContent = `: ${playerActive} Missed`
            
        }
    }

    const attackC = function(event, player) {
        let target = event.target;
        const nbShip = player.board.shipAlive;
        if (target.className != "grid_elem") return
        let [yCoord, xCoord] = target.id.match(/\d+/g);
        const result = player.board.receiveAttack([Number(xCoord), Number(yCoord)]);
        dealResult(result, nbShip, target, player);
        return result;
    };

    const attackRandom = function(player) {
        
        const nbShip = player.board.shipAlive;
        const possibleMove = player.board.possibleMove;
        const coord = possibleMove[Math.floor(Math.random()*possibleMove.length)];
        const target = document.getElementById(`r_${coord[1]}_c_${coord[0]}`)
        const result = player.board.receiveAttack([Number(coord[0]), Number(coord[1])]);
        dealResult(result, nbShip, target, player);
        return result;

    }

    return {
        attackC,
        attackRandom
    };
};