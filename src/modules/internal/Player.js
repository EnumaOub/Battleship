import Gameboard from './Gameboard'

export default class Player {
    constructor(name, realP, setCoord) {
        this.realP = realP;
        this.name = name;
        this.board = new Gameboard(setCoord);
    };

    setName(name) {
        this.name = name;
    };
}
