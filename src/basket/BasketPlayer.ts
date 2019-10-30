import { AbstractPlayer } from "../AbstractPlayer";
import { PlayerInterface } from "../PlayerInterface";

/**
 * @class BasketPlayer
 */
export class BasketPlayer extends AbstractPlayer implements PlayerInterface {

    /**
     * @type number
     */
    protected fouls: number = 0;

    /**
     *
     * @param {string} shirtNumber
     */
    constructor(shirtNumber?: string) {
        super();
        this.shirtNumber = shirtNumber;
    }

    /**
     * @return {number}
     */
    getFouls(): number {
        return this.fouls;
    }

    /**
     * @param {number} value
     */
    setFouls(value: number) {
        this.fouls = value;
        return this;
    }

    /**
     *
     * @returns {number}
     */
    public getTotalScore(): number {
        let result = 0;
        this.scores.forEach(score => {
            result += score.getValue();
        });
        return result;
    }
}