"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractPlayer_1 = require("../AbstractPlayer");
class BasketPlayer extends AbstractPlayer_1.AbstractPlayer {
    /**
     *
     * @param {string} number
     */
    constructor(number) {
        super();
        this.shirtNumber = number;
    }
    /**
     *
     * @returns {number}
     */
    getTotalScore() {
        let result = 0;
        this.scores.forEach(score => {
            result += score.getValue();
        });
        return result;
    }
}
exports.BasketPlayer = BasketPlayer;
;
