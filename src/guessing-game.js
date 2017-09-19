class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max
    }

    guess() {
        return Math.floor((this.max + this.min) / 2);
    }

    lower() {
        this.max = this.guess();
    }

    greater() {
        this.min = this.guess() + 1;
    }
}
module.exports = GuessingGame;

