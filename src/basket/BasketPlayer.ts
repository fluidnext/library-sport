import { AbstractPlayer } from "../AbstractPlayer";
import { PlayerInterface } from "../PlayerInterface";
import { ScoreInterface } from "../ScoreInterface";

export class BasketPlayer extends AbstractPlayer implements PlayerInterface {

    /**
     * 
     * @type {string}
     */
    protected firstName: string;

    /**
     * 
     * @type {string}
     */
    protected lastName: string;

    /**
     * 
     * @type {string}
     */
    protected shirtName: string;

    /**
     * 
     * @type {string}
     */
    protected shirtNumber: string;

    /**
     * 
     * @type {Array<ScoreInterface>}
     */
    protected scores: Array<ScoreInterface>;

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
};