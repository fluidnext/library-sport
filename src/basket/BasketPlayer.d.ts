import { AbstractPlayer } from "../player/AbstractPlayer";
export declare class BasketPlayer extends AbstractPlayer {
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
     * @type {number}
     */
    protected points: number;
    /**
     *
     * @param {string} name
     * @param {string} number
     */
    constructor(name: string, number: string);
    /**
     *
     * @param {string} name
     */
    setFirstName: (name: string) => void;
    /**
     *
     * @returns {string}
     */
    getFirstName: () => string;
    /**
     *
     * @param  {string} name
     */
    setLastName: (name: string) => void;
    /**
     *
     * @returns {string}
     */
    getLastName: () => string;
    /**
     *
     * @param  {string} name
     */
    setShirtName: (name: string) => void;
    /**
     *
     * @returns {string}
     */
    getShirtName: () => string;
    /**
     *
     * @param  {string} number
     */
    setShirtNumber: (number: string) => void;
    /**
     *
     * @returns {string}
     */
    getShirtNumber: () => string;
    /**
     *
     * @param  {number} points
     */
    addPoints(points: number): void;
}
