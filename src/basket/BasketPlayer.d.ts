import { AbstractPlayer } from "../AbstractPlayer";
import { PlayerInterface } from "../PlayerInterface";
/**
 * @class BasketPlayer
 */
export declare class BasketPlayer extends AbstractPlayer implements PlayerInterface {
    /**
     * @type number
     */
    protected fouls: number;
    /**
     *
     * @param {string} shirtNumber
     */
    constructor(shirtNumber?: string);
    /**
     * @return {number}
     */
    getFouls(): number;
    /**
     * @param {number} value
     */
    setFouls(value: number): this;
    /**
     *
     * @returns {number}
     */
    getTotalScore(): number;
}
