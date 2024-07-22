

export const ControlGame = function() {

    const attackC = function(event, player) {
        let target = event.target;
        const containerInfo = document.getElementById("info-r");
        const playerActive = document.getElementById("playerG").textContent
        const nbShip = player.board.shipAlive;
        if (target.className != "grid_elem") return
        let [yCoord, xCoord] = target.id.match(/\d+/g);
        const result = player.board.receiveAttack([Number(xCoord), Number(yCoord)]);
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
        return result;
    };

    const attackRandom = function(player) {
        const containerInfo = document.getElementById("info-r");
        const playerActive = document.getElementById("playerG").textContent
        const nbShip = player.board.shipAlive;

    }

    return {
        attackC
    };
};