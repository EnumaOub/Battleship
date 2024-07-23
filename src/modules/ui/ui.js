import { CreateGame } from "./CreateGame"

const runGame = function(game) {
    game.showPlayer()
    game.generateBoard(game.players.player1.board.boardG, "grid")
    if (!game.players.player1.realP){
        game.attack()
    }
}

export const UI = function() {
    const buttonRun = document.getElementById("run-game");


    buttonRun.addEventListener("click", (event) => {
        event.target.textContent = "RESTART";
        const game = CreateGame();
        if (game.players.player1.realP && game.players.player2.realP) {
            const dialogP1 = document.getElementById("player1-ship");
            const buttonRand1 = document.getElementById("rand-ship1");
            const buttonPlay1 = document.getElementById("play1-game");
            game.randomShip(game.players.player1);
            game.generateBoard(game.players.player1.board.boardT, "board-ship1")
            buttonPlay1.textContent = `Go to ${game.players.player2.name} Board`
            dialogP1.showModal();

            buttonRand1.addEventListener("click", (event) => {
                game.randomShip(game.players.player1);
                game.generateBoard(game.players.player1.board.boardT, "board-ship1")
            })
            
            buttonPlay1.addEventListener("click", (event) => {
                const dialogP2 = document.getElementById("player2-ship");
                const buttonRand2 = document.getElementById("rand-ship2");
                const buttonPlay2 = document.getElementById("play2-game");
                dialogP1.close();
                game.randomShip(game.players.player2);
                game.generateBoard(game.players.player2.board.boardT, "board-ship2")
                dialogP2.showModal();
                buttonRand2.addEventListener("click", (event) => {
                    game.randomShip(game.players.player2);
                    game.generateBoard(game.players.player2.board.boardT, "board-ship2")
                })
                buttonPlay2.addEventListener("click", (event) => {
                    dialogP2.close();
                    runGame(game);
                })
            })
        }
        else if (game.players.player1.realP) {
            const dialogP1 = document.getElementById("player1-ship");
            const buttonRand1 = document.getElementById("rand-ship1");
            const buttonPlay1 = document.getElementById("play1-game");
            game.randomShip(game.players.player2);
            game.generateBoard(game.players.player1.board.boardT, "board-ship1")
            buttonPlay1.textContent = `Play Game`
            dialogP1.showModal();
            buttonRand1.addEventListener("click", (event) => {
                game.randomShip(game.players.player1);
                game.generateBoard(game.players.player1.board.boardT, "board-ship1")
            })
            buttonPlay1.addEventListener("click", (event) => {
                dialogP1.close();
                runGame(game);
            })
        }
        else if (game.players.player2.realP) {
            const dialogP2 = document.getElementById("player2-ship");
            const buttonRand2 = document.getElementById("rand-ship2");
            const buttonPlay2 = document.getElementById("play2-game");
            game.randomShip(game.players.player1);
            game.generateBoard(game.players.player2.board.boardT, "board-ship2")
            dialogP2.showModal();
            buttonRand2.addEventListener("click", (event) => {
                game.randomShip(game.players.player2);
                game.generateBoard(game.players.player2.board.boardT, "board-ship2")
            })
            buttonPlay2.addEventListener("click", (event) => {
                dialogP2.close();
                runGame(game);
            })
        }
        else {
            game.randomShip(game.players.player1);
            game.randomShip(game.players.player2);
            runGame(game);
        }
        
    })

    
    
}