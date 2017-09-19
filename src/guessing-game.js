class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min + 1;
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

const game = new GuessingGame();
game.setRange(0, 1501)

let result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
result = game.guess();

console.log(result)
