import { CreateGame } from "./CreateGame"

export const UI = function() {
    const game = CreateGame();
    console.log(game.players);
}