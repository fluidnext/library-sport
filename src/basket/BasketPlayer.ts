import { AbstractPlayer } from "../AbstractPlayer";
import { PlayerInterface } from "../PlayerInterface";
import { ScoreInterface } from "../ScoreInterface";

export class BasketPlayer extends AbstractPlayer implements PlayerInterface {

    /**
     * 
     * @param {string} number
     */
    constructor(number: string) {
        super();
        this.shirtNumber = number;
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

    /**
     * 
     * @returns {BasketPlayer}
     */
    public undoScore(): BasketPlayer{
        this.removeScore(this.scores.length -1);
        return this;
    }
};