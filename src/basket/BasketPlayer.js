import { AbstractPlayer } from "../AbstractPlayer";
export class BasketPlayer extends AbstractPlayer {
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
;
//# sourceMappingURL=BasketPlayer.js.map