import Ship from './Ship'

export default class Gameboard {
    constructor(xSize, ySize) {
        this.shipArr = [];
        this.xSize = xSize;
        this.ySize = ySize;
        this.attackNb = 0;
        this.attackMissed = 0;
        this.shipAlive = 0;
        this.boardG = this.initBoard(xSize, ySize);
    };

    initBoard(cols, rows) {
        const array = [];
        for (let i = 0; i < rows; i++) {
            array[i] = [];
            for (let j = 0; j < cols; j++) {
                array[i][j] = ".";
            }
        }
        return array;
    }

    populateShip(ship) {
        if (ship.position === "HORIZONTAL") {
            for (let i=ship.coordInit[0]; i<ship.coordFin[0]; i++) {
                this.boardG[i][ship.coordInit[1]] = 'o';
            }
        }
        else if (ship.position === "VERTICAL") {
            for (let i=ship.coordInit[1]; i<ship.coordFin[1]; i++) {
                this.boardG[ship.coordInit[0]][i] = 'o';
            }
        }
    };

    showBoard() {
        let i = 0;
        const boardV = [...this.boardG]
        console.log([' '].concat(Array.from(Array(8).keys())).toString().replace(/,/g,' '));
        boardV.forEach((line) => {
            console.log(`${i} ${line.toString().replace(/,/g,' ')}`)
            i++;
        })
    }

    addShip(coordInit, coordFin) {
        if (this.checkCoordinate(coordInit) && this.checkCoordinate(coordFin)) {
            const ship = new Ship(coordInit, coordFin)
            this.shipArr.push(ship);
            this.populateShip(ship);
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
            this.boardG[coord[0]][coord[1]] = "x";
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
