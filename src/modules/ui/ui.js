import { CreateGame } from "./CreateGame"

export const UI = function() {
    const game = CreateGame();
    console.log(game.players);
    game.generateTrueBoard(game.players.player1)
    game.generateHiddenBoard(game.players.player1)
}