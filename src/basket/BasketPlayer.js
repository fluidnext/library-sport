import { AbstractPlayer } from "../AbstractPlayer";
/**
 * @class BasketPlayer
 */
export class BasketPlayer extends AbstractPlayer {
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
;
//# sourceMappingURL=BasketPlayer.js.map