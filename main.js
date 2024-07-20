class Ship {
    constructor(coordInit, coordFin) {
        this.hitNb = 0;
        this.sunk = false;
        this.coordInit = coordInit;
        this.coordFin = coordFin;
        if (coordInit[0] === coordFin[0] && coordInit[1] !== coordFin[1]) {
            this.length = Math.abs(coordInit[1]-coordFin[1]) + 1
        }
        else if (coordInit[1] === coordFin[1] && coordInit[0] !== coordFin[0]) {
            this.length = Math.abs(coordInit[0]-coordFin[0]) + 1
        }
        else {
            throw new Error(`The coordinate given ${coordInit} and ${coordFin} doesn't allow the creation of a ship`);
        }
    }

    hit() {
        this.hitNb++;
    }

    isSunk() {
        if (this.hitNb === this.length) {
            this.sunk = true;
        }
    }
};

class Gameboard {
    constructor(coordInit, coordFin) {
        this.ship = new Ship(coordInit, coordFin);
    };
}

module.exports = {
    Ship,
    Gameboard
};