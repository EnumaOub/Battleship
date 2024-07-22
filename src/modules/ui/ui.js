import { CreateGame } from "./CreateGame"

export const UI = function() {
    const game = CreateGame();
    console.log(game.players);
    game.generateTrueBoard(game.players.player1.player)
    game.generateHiddenBoard(game.players.player1.board)
}