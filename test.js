const main = require("./main");

describe("Ship", () => {
    const Ship = new main.Ship(5);
  
    test('Check ship length param', () => {
        expect(Ship.length).toBe(5);
    });
    test('Check ship hit param init', () => {
        expect(Ship.hit).toBe(0);
    });
    test('Check sunk param init', () => {
        expect(Ship.sunk).toBe(false);
    });
  });


