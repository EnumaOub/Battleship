import Ship from './Ship'

export default class Gameboard {
    constructor(xSize, ySize) {
        // Size of gameboard
        this.xSize = xSize;
        this.ySize = ySize;
        // Array with all ship of gameboard
        this.shipArr = [];
        // Initialisize the number of attack
        this.attackNb = 0;
        // Initialisize the number of missed attack
        this.attackMissed = 0;
        // Initialisze the number of ship still alive
        this.shipAlive = 0;
        // Array with all possible moves
        this.possibleMove = []
        // Initialise BoardT wich will contain the ships
        this.boardT = this.initBoard(".");
        // Initialise BoardG the board for the game virgin
        this.boardG = this.initBoard("");
    };

    // Initialise the 2 boards array and the possible moves
    initBoard(data) {
        const array = [];
        this.possibleMove = []
        for (let i = 0; i < this.xSize; i++) {
            array[i] = [];
            for (let j = 0; j < this.ySize; j++) {
                array[i][j] = data;
                this.possibleMove.push([i, j]) 
                
            }
        }
        return array;
    }

    // reset the board used for new game or to reinitialise the ships
    resetBoard() {
        this.shipArr = [];
        this.attackNb = 0;
        this.attackMissed = 0;
        this.shipAlive = 0;
        this.possibleMove = []
        this.boardT = this.initBoard(".");
        this.boardG = this.initBoard("");
    };

    // Check if the coordinate given is on the path of a ship
    checkShipCoord(coord) {
        let checkShip = true;
        this.shipArr.forEach((ship) => {
            if (ship.position === "HORIZONTAL" && coord[1] === ship.coordInit[1]) {
                checkShip = coord[0] < ship.coordInit[0] || coord[0] > ship.coordFin[0]
            }
            else if (ship.position === "VERTICAL" && coord[0] === ship.coordInit[0]) {
                checkShip = coord[1] < ship.coordInit[1] || coord[1] > ship.coordFin[1]
            }
        })
        return checkShip;
    }

    checkCoordinate(coord) {
        return coord[0] < this.xSize && coord[1] < this.ySize
    }

    // Function to add a ship randomly on the board
    addRandomShip(length=3) {
        let ship = null;
        while (!ship) {
            const coordInit = this.possibleMove[Math.floor(Math.random()*this.possibleMove.length)];
            // for the initial coordinate we check if it is in the board and if it is not on another ship
            if (this.checkCoordinate(coordInit) && this.checkShipCoord(coordInit)) {
                // The ships are between a length of 2 and 4
                let coordFin;
                // We randomly create a ship hozizontal or vertical
                if (Math.random() < 0.5) {
                    coordFin = [coordInit[0], coordInit[1] + length];
                }
                else {
                    coordFin = [coordInit[0] + length, coordInit[1]];
                }
                // for the ending coordinate we check if it is in the board and if it is not on another ship
                if (this.checkCoordinate(coordFin) && this.checkShipCoord(coordFin)) {
                    this.addShip(coordInit, coordFin);
                    ship = true;
                }
            }
            
        }
        
    }

    // Add ship with the given coordinates
    addShip(coordInit, coordFin) {
        if (this.checkCoordinate(coordInit) && this.checkCoordinate(coordFin)) {
            const ship = new Ship(coordInit, coordFin)
            this.shipArr.push(ship);
            this.populateShip(ship);
            this.shipAlive++;
        };
    };

    

    // Add ship to board BardT each time a board is added
    populateShip(ship) {
        if (ship.position === "HORIZONTAL") {
            this.boardT[ship.coordInit[0]][ship.coordInit[1]] = '|';
            this.boardT[ship.coordFin[0]][ship.coordInit[1]] = '>';
            for (let i=ship.coordInit[0]+1; i<=ship.coordFin[0]-1; i++) {
                this.boardT[i][ship.coordInit[1]] = '--';
            }
        }
        else if (ship.position === "VERTICAL") {
            this.boardT[ship.coordInit[0]][ship.coordInit[1]] = '^';
            this.boardT[ship.coordInit[0]][ship.coordFin[1]] = '__';
            for (let i=ship.coordInit[1]+1; i<=ship.coordFin[1]-1; i++) {
                this.boardT[ship.coordInit[0]][i] = '|';
            }
        }
    };

    // Transpose array for showing board
    transpose(arr) {
        let [row] = arr
        return row.map((value, column) => arr.map(row => row[column]))
    }

    // Show true board with ships in console
    showBoard() {
        let i = 0;
        const boardV = this.transpose([...this.boardT])
        console.log([' '].concat(Array.from(Array(8).keys())).toString().replace(/,/g,' '));
        boardV.forEach((line) => {
            console.log(`${i} ${line.toString().replace(/,/g,' ')}`)
            i++;
        })
    }

    // Check if coordinate touch the ship
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

    // Function where opponent attack a coordinate of the board
    receiveAttack(coord) {
        if(this.checkCoordinate(coord)) {
            let touched = [];
            // Check if a ship is touched  
            // if it is the case the index is stored in variable "touched"
            for (let i=0; i<this.shipAlive; i++) {
                if (this.checkShipAttack(this.shipArr[i], coord)) {
                    touched.push(i);
                }
            }
            // Add one attack
            this.attackNb++;
            // Add attack on board
            this.boardT[coord[0]][coord[1]] = "x";
            // delete move from possible moves array
            this.possibleMove = this.possibleMove.filter(coordd => coordd.toString() !== coord.toString());
            if (touched.length !== 0) {
                for (const touch of touched) {
                    // If a ship is touched
                    this.boardG[coord[0]][coord[1]] = "o";
                    this.shipArr[touch].hit();
                    if (this.shipArr[touch].sunk) {
                        // Delete ship if its sunk
                        this.shipArr.splice(touch, 1);
                        this.shipAlive--;
                    }
                    return true;
                }
                
            }
            else {
                this.boardG[coord[0]][coord[1]] = "x";
                this.attackMissed++;
                return false;
            }
        }
        
    };
};
