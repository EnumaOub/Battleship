const main = require("./main");

// Ship 

describe("Ship Error init [0, 1] [0, 1]", () => {
    const coordInit = [0, 1];
    const coordFin = [0, 1];
    expect(() => new main.Ship(coordInit, coordFin)).toThrow(Error(`The coordinate given ${coordInit} and ${coordFin} doesn't allow the creation of a ship`));
});

describe("Ship init [0, 5] [3, 5]", () => {
    const coordInit = [0, 5];
    const coordFin = [3, 5];
    const testShip = new main.Ship(coordInit, coordFin);
  
    test('Check ship length param', () => {
        expect(testShip.length).toBe(4);
    });
    test('Check ship hit param init', () => {
        expect(testShip.hitNb).toBe(0);
    });
    test('Check ship sunk param init', () => {
        expect(testShip.sunk).toBe(false);
    });
    test('Check ship position param init', () => {
        expect(testShip.position).toBe("HORIZONTAL");
    });

});

describe("Ship init [4, 5] [4, 7]", () => {
    const coordInit = [4, 5];
    const coordFin = [4, 7];
    const testShip = new main.Ship(coordInit, coordFin);
  
    test('Check ship length param', () => {
        expect(testShip.length).toBe(3);
    });
    test('Check ship hit param init', () => {
        expect(testShip.hitNb).toBe(0);
    });
    test('Check ship sunk param init', () => {
        expect(testShip.sunk).toBe(false);
    });
    test('Check ship position param init', () => {
        expect(testShip.position).toBe("VERTICAL");
    });

});


describe("Ship 1 hit", () => {
    const coordInit = [0, 5];
    const coordFin = [3, 5];
    const testShip = new main.Ship(coordInit, coordFin);

    testShip.hit()
    testShip.isSunk()

    test('Check ship hit param after 1 hit', () => {
        expect(testShip.hitNb).toBe(1);
    });
    test('Check ship sunk param after 1 hit', () => {
        expect(testShip.sunk).toBe(false);
    });
});

describe("Ship full hits", () => {
    const coordInit = [0, 5];
    const coordFin = [4, 5];
    const length = 5
    const testShip = new main.Ship(coordInit, coordFin);

    for(let i=0; i<length; i++) {
        testShip.hit()
    }
    testShip.isSunk()

    test(`Check ship hit param after ${length} hit`, () => {
        expect(testShip.hitNb).toBe(5);
    });
    test(`Check ship sunk param after ${length} hit`, () => {
        expect(testShip.sunk).toBe(true);
    });
});

//Gameboard

describe("Gameboard init", () => {
    const setCoord = [
        [[0, 5], [3, 5]],
        [[2, 2], [2, 0]],
        [[4, 1], [4, 5]]
    ]
    const testBoard = new main.Gameboard(setCoord);

    test('Check Gameboard number of ships', () => {
        expect(testBoard.shipAlive).toBe(3);
    });
    test('Check Gameboard number of attack ', () => {
        expect(testBoard.attackNb).toBe(0);
    });
    test('Check Gameboard number of missed attack', () => {
        expect(testBoard.attackMissed).toBe(0);
    });
    test('Check Gameboard first ship hit param init', () => {
        expect(testBoard.shipArr[0].hitNb).toBe(0);
    });
    test('Check Gameboard second ship sunk param init', () => {
        expect(testBoard.shipArr[1].sunk).toBe(false);
    });
    test('Check ship position param init', () => {
        expect(testBoard.shipArr[1].position).toBe("VERTICAL");
    });
});

describe("Gameboard attack miss", () => {
    const setCoord = [
        [[0, 5], [3, 5]],
        [[2, 2], [2, 0]],
        [[4, 1], [4, 5]]
    ]
    const attackCoord = [0, 0];

    const testBoard = new main.Gameboard(setCoord);
    const attackRes = testBoard.receiveAttack(attackCoord);
    
    test('Check Gameboard attack miss', () => {
        expect(attackRes).toBe(false);
    });
    test('Check Gameboard number of ships', () => {
        expect(testBoard.shipAlive).toBe(3);
    });
    test('Check Gameboard number of attack ', () => {
        expect(testBoard.attackNb).toBe(1);
    });
    test('Check Gameboard number of missed attack', () => {
        expect(testBoard.attackMissed).toBe(1);
    });
    test('Check Gameboard first ship hit param', () => {
        expect(testBoard.shipArr[0].hitNb).toBe(0);
    });
    test('Check Gameboard second ship sunk param', () => {
        expect(testBoard.shipArr[1].sunk).toBe(false);
    });
});

describe("Gameboard attack touch Horizontal", () => {
    const setCoord = [
        [[0, 5], [3, 5]],
        [[2, 2], [2, 0]],
        [[4, 1], [4, 5]]
    ]
    const attackCoord = [0, 5];

    const testBoard = new main.Gameboard(setCoord);
    const attackRes = testBoard.receiveAttack(attackCoord);
    
    test('Check Gameboard attack miss', () => {
        expect(attackRes).toBe(true);
    });
    test('Check Gameboard number of ships', () => {
        expect(testBoard.shipAlive).toBe(3);
    });
    test('Check Gameboard number of attack ', () => {
        expect(testBoard.attackNb).toBe(1);
    });
    test('Check Gameboard number of missed attack', () => {
        expect(testBoard.attackMissed).toBe(0);
    });
    test('Check Gameboard first ship hit param', () => {
        expect(testBoard.shipArr[0].hitNb).toBe(1);
    });
    test('Check Gameboard first ship sunk param', () => {
        expect(testBoard.shipArr[0].sunk).toBe(false);
    });
});

describe("Gameboard attack touch Vertical", () => {
    const setCoord = [
        [[0, 5], [3, 5]],
        [[2, 2], [2, 0]],
        [[4, 1], [4, 5]]
    ]
    const attackCoord = [2, 0];

    const testBoard = new main.Gameboard(setCoord);
    const attackRes = testBoard.receiveAttack(attackCoord);
    
    test('Check Gameboard attack miss', () => {
        expect(attackRes).toBe(true);
    });
    test('Check Gameboard number of ships', () => {
        expect(testBoard.shipAlive).toBe(3);
    });
    test('Check Gameboard number of attack ', () => {
        expect(testBoard.attackNb).toBe(1);
    });
    test('Check Gameboard number of missed attack', () => {
        expect(testBoard.attackMissed).toBe(0);
    });
    test('Check Gameboard second ship hit param', () => {
        expect(testBoard.shipArr[1].hitNb).toBe(1);
    });
    test('Check Gameboard second ship sunk param', () => {
        expect(testBoard.shipArr[1].sunk).toBe(false);
    });
});

describe("Gameboard attack touch sink first", () => {
    const setCoord = [
        [[0, 5], [3, 5]],
        [[2, 2], [2, 0]],
        [[4, 1], [4, 5]]
    ]

    const testBoard = new main.Gameboard(setCoord);
    testBoard.receiveAttack([0, 5]);
    testBoard.receiveAttack([0, 0]);
    testBoard.receiveAttack([1, 5]);
    testBoard.receiveAttack([2, 5]);
    const attackRes = testBoard.receiveAttack([3, 5]);
    
    test('Check Gameboard attack miss', () => {
        expect(attackRes).toBe(true);
    });
    test('Check Gameboard number of ships', () => {
        expect(testBoard.shipAlive).toBe(2);
    });
    test('Check Gameboard number of attack ', () => {
        expect(testBoard.attackNb).toBe(5);
    });
    test('Check Gameboard number of missed attack', () => {
        expect(testBoard.attackMissed).toBe(1);
    });
    console.log(testBoard.shipArr[0])
});