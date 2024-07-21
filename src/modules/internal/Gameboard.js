import Ship from './Ship'

export default class Gameboard {
    constructor(xSize, ySize) {
        this.shipArr = [];
        this.xSize = xSize;
        this.ySize = ySize;
        this.attackNb = 0;
        this.attackMissed = 0;
        this.shipAlive = 0;
    };

    addShip(coordInit, coordFin) {
        if (this.checkCoordinate(coordInit) && this.checkCoordinate(coordFin)) {
            this.shipArr.push(new Ship(coordInit, coordFin));
            this.shipAlive++;
        };
    };

    checkCoordinate(coord) {
        return coord[0] < this.xSize && coord[1] < this.ySize
    }

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
        if(this.checkCoordinate(coord)) {
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
        }
        
    };
};
