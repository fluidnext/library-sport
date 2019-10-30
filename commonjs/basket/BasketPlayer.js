"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractPlayer_1 = require("../AbstractPlayer");
/**
 * @class BasketPlayer
 */
class BasketPlayer extends AbstractPlayer_1.AbstractPlayer {
    /**
     *
     * @param {string} shirtNumber
     */
    constructor(shirtNumber) {
        super();
        /**
         * @type number
         */
        this.fouls = 0;
        this.shirtNumber = shirtNumber;
    }
    /**
     * @return {number}
     */
    getFouls() {
        return this.fouls;
    }
    /**
     * @param {number} value
     */
    setFouls(value) {
        this.fouls = value;
        return this;
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
