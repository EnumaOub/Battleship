import { CreateGame } from "./CreateGame"

export const UI = function() {
    const buttonRun = document.getElementById("run-game");
    buttonRun.addEventListener("click", (event) => {
        const game = CreateGame();
        console.log(game.players);
        game.showPlayer()
        game.generateBoard(game.players.player1.board.boardG)
        if (!game.players.player1.realP){
            game.attack()
        }
    })
    
}