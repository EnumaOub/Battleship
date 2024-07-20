class Ship {
    constructor(coordInit, coordFin) {
        this.hitNb = 0;
        this.sunk = false;
        if (coordInit[0] === coordFin[0] && coordInit[1] !== coordFin[1]) {
            this.length = Math.abs(coordInit[1]-coordFin[1]) + 1
            this.position = "VERTICAL";
            this.coordInit = coordInit[1] < coordFin[1] ? coordInit: coordFin;
            this.coordFin = coordInit[1] > coordFin[1] ? coordInit: coordFin;
        }
        else if (coordInit[1] === coordFin[1] && coordInit[0] !== coordFin[0]) {
            this.length = Math.abs(coordInit[0]-coordFin[0]) + 1
            this.position = "HORIZONTAL";
            this.coordInit = coordInit[0] < coordFin[0] ? coordInit: coordFin;
            this.coordFin = coordInit[0] > coordFin[0] ? coordInit: coordFin;
        }
        else {
            throw new Error(`The coordinate given ${coordInit} and ${coordFin} doesn't allow the creation of a ship`);
        }
    }

    hit() {
        this.hitNb++;
        this.isSunk();
    }

    isSunk() {
        if (this.hitNb === this.length) {
            this.sunk = true;
            return true;
        }
        return false;
    }
};

class Gameboard {
    constructor(setCoord) {
        this.shipArr = [];
        this.attackNb = 0;
        this.attackMissed = 0;
        this.shipAlive = setCoord.length;
        setCoord.forEach((coord) => this.shipArr.push(new Ship(...coord)))
    };

    checkShipAttack(ship, coord) {
        if (ship.position === "HORIZONTAL" && coord[1] === ship.coordInit[1]) {
            return coord[0] >= ship.coordInit[0] && coord[0] <= ship.coordFin[0] 
        }
        else if (ship.position === "VERTICAL" && coord[0] === ship.coordInit[0]) {
            return coord[1] >= ship.coordInit[1] && coord[1] <= ship.coordFin[1] 
        }
        else {
            return false
        }
    }

    receiveAttack(coord) {
        let touched = null;
        
        for (let i=0; i<this.shipAlive; i++) {
            if (this.checkShipAttack(this.shipArr[i], coord)) {
                touched = i;
            }
        }
        this.attackNb++;
        if (touched !== null) {
            this.shipArr[touched].hit();
            if (this.shipArr[touched].sunk) {
                this.shipArr.splice(touched, 1);
                this.shipAlive--;
            }
            return true;
        }
        else {
            this.attackMissed++;
            return false;
        }
    };
};

module.exports = {
    Ship,
    Gameboard
};