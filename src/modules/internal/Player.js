import Gameboard from './Gameboard'

export default class Player {
    constructor(name, realP, xSize, ySize) {
        this.realP = realP;
        this.name = name;
        this.active = false;
        this.board = new Gameboard(xSize, ySize);
    };

    setName(name) {
        this.name = name;
    };

    toggleActive() {
        this.active= !this.active;
    }
}
