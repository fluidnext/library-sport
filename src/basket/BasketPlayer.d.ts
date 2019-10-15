import { AbstractPlayer } from "../AbstractPlayer";
import { PlayerInterface } from "../PlayerInterface";
import { ScoreInterface } from "../ScoreInterface";
export declare class BasketPlayer extends AbstractPlayer implements PlayerInterface {
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
    constructor(number: string);
    /**
     *
     * @returns {number}
     */
    getTotalScore(): number;
}
