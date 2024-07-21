import Player from "../src/modules/internal/Player"

//Player

describe("Player init", () => {
    const setCoord = [
        [[0, 5], [3, 5]],
        [[2, 2], [2, 0]],
        [[4, 1], [4, 5]]
    ];
    const name = "Player 1";
    const realP = true;
    const testPlayer = new Player(name, realP, setCoord);

    test('Check Player Gameboard number of ships', () => {
        expect(testPlayer.name).toBe(name);
    });
    test('Check Player Gameboard number of ships', () => {
        expect(testPlayer.realP).toBe(realP);
    });

    test('Check Player Gameboard number of ships', () => {
        expect(testPlayer.board.shipAlive).toBe(3);
    });
    test('Check Player Gameboard number of attack ', () => {
        expect(testPlayer.board.attackNb).toBe(0);
    });
    test('Check Player Gameboard number of missed attack', () => {
        expect(testPlayer.board.attackMissed).toBe(0);
    });

    test('Check Player Gameboard first ship hit param init', () => {
        expect(testPlayer.board.shipArr[0].hitNb).toBe(0);
    });
    test('Check Player Gameboard second ship sunk param init', () => {
        expect(testPlayer.board.shipArr[1].sunk).toBe(false);
    });
    test('Check Player first ship position param init', () => {
        expect(testPlayer.board.shipArr[0].position).toBe("HORIZONTAL");
    });
});

describe("Player test hit and miss ships", () => {
    const setCoord = [
        [[0, 5], [3, 5]],
        [[2, 2], [2, 0]],
        [[4, 1], [4, 5]]
    ];
    const name = "Player 1";
    const realP = true;
    const testPlayer = new Player(name, realP, setCoord);
    testPlayer.board.receiveAttack([0, 5]);
    testPlayer.board.receiveAttack([0, 0]);

    test('Check Player Gameboard number of ships', () => {
        expect(testPlayer.name).toBe(name);
    });
    test('Check Player Gameboard number of ships', () => {
        expect(testPlayer.realP).toBe(realP);
    });

    test('Check Player Gameboard number of ships', () => {
        expect(testPlayer.board.shipAlive).toBe(3);
    });
    test('Check Player Gameboard number of attack ', () => {
        expect(testPlayer.board.attackNb).toBe(2);
    });
    test('Check Player Gameboard number of missed attack', () => {
        expect(testPlayer.board.attackMissed).toBe(1);
    });

    test('Check Player Gameboard first ship hit param init', () => {
        expect(testPlayer.board.shipArr[0].hitNb).toBe(1);
    });
    test('Check Player Gameboard second ship sunk param init', () => {
        expect(testPlayer.board.shipArr[1].sunk).toBe(false);
    });
    test('Check Player first ship position param init', () => {
        expect(testPlayer.board.shipArr[0].position).toBe("HORIZONTAL");
    });
});