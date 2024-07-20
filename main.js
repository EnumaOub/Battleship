class Ship {
    constructor(length) {
        this.length = length;
        this.hitNb = 0;
        this.sunk = false;
    }

    hit() {
        this.hitNb++;
    }

    isSunk() {
        if (this.hitNb === this.length) {
            this.sunk = true;
        }
    }
}

module.exports = {
    Ship
};