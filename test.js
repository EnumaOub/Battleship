const main = require("./main");

describe("Ship init", () => {
    const length = 5;
    const testShip = new main.Ship(length);
  
    test('Check ship length param', () => {
        expect(testShip.length).toBe(length);
    });
    test('Check ship hit param init', () => {
        expect(testShip.hitNb).toBe(0);
    });
    test('Check sunk param init', () => {
        expect(testShip.sunk).toBe(false);
    });

});


describe("Ship 1 hit", () => {
    const length = 5;
    const testShip = new main.Ship(length);

    testShip.hit()
    testShip.isSunk()

    test('Check ship hit param after 1 hit', () => {
        expect(testShip.hitNb).toBe(1);
    });
    test('Check sunk param after 1 hit', () => {
        expect(testShip.sunk).toBe(false);
    });
});

describe("Ship full hits", () => {
    const length = 5;
    const testShip = new main.Ship(length);

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
