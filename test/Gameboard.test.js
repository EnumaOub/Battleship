import Gameboard from "../src/modules/internal/Gameboard"

//Gameboard

describe("Gameboard init", () => {
    const setCoord = [
        [[0, 5], [3, 5]],
        [[2, 2], [2, 0]],
        [[4, 1], [4, 5]]
    ]
    const testBoard = new Gameboard(setCoord);

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

    const testBoard = new Gameboard(setCoord);
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

    const testBoard = new Gameboard(setCoord);
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

    const testBoard = new Gameboard(setCoord);
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

    const testBoard = new Gameboard(setCoord);
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
});