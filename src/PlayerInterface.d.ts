import { ScoreInterface } from "./ScoreInterface";
export interface PlayerInterface {
    /**
     *
     * @param {string} name
     */
    setFirstName(name: string): any;
    /**
     *
     * @return {string}
     */
    getFirstName(): string;
    /**
     *
     * @param {string} name
     */
    setLastName(name: string): any;
    /**
     *
     * @return {string}
     */
    getLastName(): string;
    /**
     *
     * @param {string} name
     */
    setShirtName(name: string): any;
    /**
     *
     * @return {string}
     */
    getShirtName(): string;
    /**
     *
     * @param {string} number
     */
    setShirtNumber(number: string): any;
    /**
     *
     * @return {string}
     */
    getShirtNumber(): string;
    /**
     *
     * @param {ScoreInterface} score
     */
    addScore(score: ScoreInterface): any;
    /**
     *
     * @param {number} index
     */
    removeScore(index: number): any;
    /**
     *
     * @returns {Array<ScoreInterface>}
     */
    getScores(): Array<ScoreInterface>;
}
