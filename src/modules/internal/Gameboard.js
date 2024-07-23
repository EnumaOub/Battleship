import Ship from './Ship'

export default class Gameboard {
    constructor(xSize, ySize) {
        this.shipArr = [];
        this.xSize = xSize;
        this.ySize = ySize;
        this.attackNb = 0;
        this.attackMissed = 0;
        this.shipAlive = 0;
        this.possibleMove = []
        this.boardT = this.initBoard(ySize, xSize, ".");
        this.boardG = this.initBoard(ySize, xSize, "");
    };

    initBoard(cols, rows, data) {
        const array = [];
        for (let i = 0; i < rows; i++) {
            array[i] = [];
            for (let j = 0; j < cols; j++) {
                array[i][j] = data;
                this.possibleMove.push([i, j])
            }
        }
        return array;
    }

    populateShip(ship) {
        if (ship.position === "HORIZONTAL") {
            for (let i=ship.coordInit[0]; i<=ship.coordFin[0]; i++) {
                this.boardT[i][ship.coordInit[1]] = 'o';
            }
        }
        else if (ship.position === "VERTICAL") {
            for (let i=ship.coordInit[1]; i<=ship.coordFin[1]; i++) {
                this.boardT[ship.coordInit[0]][i] = 'o';
            }
        }
    };

    transpose(arr) {
        let [row] = arr
        return row.map((value, column) => arr.map(row => row[column]))
      }

    showBoard() {
        let i = 0;
        const boardV = this.transpose([...this.boardT])
        console.log([' '].concat(Array.from(Array(8).keys())).toString().replace(/,/g,' '));
        boardV.forEach((line) => {
            console.log(`${i} ${line.toString().replace(/,/g,' ')}`)
            i++;
        })
    }

    resetShip() {
        this.shipArr = [];
        this.attackNb = 0;
        this.attackMissed = 0;
        this.shipAlive = 0;
        this.possibleMove = []
        this.boardT = this.initBoard(this.ySize, this.xSize, ".");
        this.boardG = this.initBoard(this.ySize, this.xSize, "");
    }

    generateRandomShip() {
        let ship = null;
        while (!ship) {
            const coordInit = this.possibleMove[Math.floor(Math.random()*this.possibleMove.length)];
            if (this.checkCoordinate(coordInit) && this.checkShipCoord(coordInit)) {
                const length = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
                let coordFin;
                if (Math.random() < 0.5) {
                    coordFin = [coordInit[0], coordInit[1] + length];
                }
                else {
                    coordFin = [coordInit[0] + length, coordInit[1]];
                }
                if (this.checkCoordinate(coordFin) && this.checkShipCoord(coordFin)) {
                    this.addShip(coordInit, coordFin);
                    ship = true;
                }
            }
            
        }
        
    }

    addShip(coordInit, coordFin) {
        if (this.checkCoordinate(coordInit) && this.checkCoordinate(coordFin)) {
            const ship = new Ship(coordInit, coordFin)
            this.shipArr.push(ship);
            this.populateShip(ship);
            this.shipAlive++;
        };
    };

    checkShipCoord(coord) {
        let checkShip = true;
        this.shipArr.forEach((ship) => {
            if (ship.position === "HORIZONTAL" && coord[1] === ship.coordInit[1]) {
                checkShip = !(coord[0] >= ship.coordInit[0] && coord[0] <= ship.coordFin[0]) 
            }
            else if (ship.position === "VERTICAL" && coord[0] === ship.coordInit[0]) {
                checkShip = !(coord[1] >= ship.coordInit[1] && coord[1] <= ship.coordFin[1]) 
            }
        })
        return checkShip;
    }

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
            this.boardT[coord[0]][coord[1]] = "x";
            this.possibleMove = this.possibleMove.filter(coordd => coordd.toString() !== coord.toString());
            if (touched !== null) {
                this.boardG[coord[0]][coord[1]] = "o";
                this.shipArr[touched].hit();
                if (this.shipArr[touched].sunk) {
                    this.shipArr.splice(touched, 1);
                    this.shipAlive--;
                }
                return true;
            }
            else {
                this.boardG[coord[0]][coord[1]] = "x";
                this.attackMissed++;
                return false;
            }
        }
        
    };
};
