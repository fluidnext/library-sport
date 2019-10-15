import { ScoreInterface } from "./ScoreInterface";
export declare abstract class AbstractPlayer {
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
     * @param {string} name
     * @returns {AbstractPlayer}
     */
    setFirstName(name: string): AbstractPlayer;
    /**
     *
     * @returns {string}
     */
    getFirstName: () => string;
    /**
     *
     * @param {string} name
     * @returns {AbstractPlayer}
     */
    setLastName(name: string): AbstractPlayer;
    /**
     *
     * @returns {string}
     */
    getLastName: () => string;
    /**
     *
     * @param {string} name
     * @returns {AbstractPlayer}
     */
    setShirtName(name: string): AbstractPlayer;
    /**
     *
     * @returns {string}
     */
    getShirtName: () => string;
    /**
     *
     * @param {string} number
     * @returns {AbstractPlayer}
     */
    setShirtNumber(number: string): AbstractPlayer;
    /**
     *
     * @returns {string}
     */
    getShirtNumber: () => string;
    /**
     *
     * @param {ScoreInterface} score
     * @returns {AbstractPlayer}
     */
    addScore(score: ScoreInterface): AbstractPlayer;
    /**
     *
     * @param {number} index
     * @returns {AbstractPlayer}
     */
    removeScore(index: number): AbstractPlayer;
    /**
     *
     * @returns {Array<ScoreInterface>}
     */
    getScores: () => ScoreInterface[];
}
