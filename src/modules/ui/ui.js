import { CreateGame } from "./CreateGame"

export const UI = function() {
    const game = CreateGame();
    console.log(game.players);
    game.showPlayer()
    game.generateBoard(game.players.player1.board.boardG)
}