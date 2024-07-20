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
    const coordInit = [0, 5];
    const coordFin = [3, 5];
    const testBoard = new main.Gameboard(coordInit, coordFin);

    test('Check Gameboard ship length param', () => {
        expect(testBoard.ship.length).toBe(4);
    });
    test('Check Gameboard ship hit param init', () => {
        expect(testBoard.ship.hitNb).toBe(0);
    });
    test('Check Gameboard ship sunk param init', () => {
        expect(testBoard.ship.sunk).toBe(false);
    });
});