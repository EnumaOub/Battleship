import { CreateGame } from "./CreateGame"
import Gameboard from "../internal/Gameboard";


export const UI = function() {
    const buttonRun = document.getElementById("run-game");
    const sizeX = document.getElementById('coordX').value;
    const sizeY = document.getElementById('coordY').value;
    const boardEmpty = new Gameboard(sizeX, sizeY);
    CreateGame().generateBoard("NOT", boardEmpty.boardG, "player1-grid", false);
    CreateGame().generateBoard("NOT", boardEmpty.boardG, "player2-grid", false);

    buttonRun.addEventListener("click", (event) => {
        if (event.target.className === "restart") {
            window.location.reload()
        }
        else {
            event.target.textContent = "RESET";
            event.target.className = "restart";
            const game = CreateGame();
            game.getGame();
        }
          
    })
}