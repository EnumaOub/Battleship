import { CreateGame } from "./CreateGame"


export const UI = function() {
    const buttonRun = document.getElementById("run-game");

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