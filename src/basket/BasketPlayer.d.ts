import { AbstractPlayer } from "../AbstractPlayer";
import { PlayerInterface } from "../PlayerInterface";
export declare class BasketPlayer extends AbstractPlayer implements PlayerInterface {
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
    /**
     *
     * @returns {BasketPlayer}
     */
    undoScore(): BasketPlayer;
}
