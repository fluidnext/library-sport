import { ScoreInterface } from "./ScoreInterface";

export interface PlayerInterface {

    /**
     * 
     * @param {string} name 
     */
    setFirstName(name: string);

    /**
     * 
     * @return {string}
     */
    getFirstName(): string;

    /**
     * 
     * @param {string} name
     */
    setLastName(name: string);
    
    /**
     * 
     * @return {string}
     */
    getLastName(): string;

    /**
     * 
     * @param {string} name
     */
    setShirtName(name: string);

    /**
     * 
     * @return {string}
     */
    getShirtName(): string;

    /**
     * 
     * @param {string} number
     */
    setShirtNumber(number: string);

    /**
     * 
     * @return {string}
     */
    getShirtNumber(): string;

    /**
     * 
     * @param {ScoreInterface} score
     */
    addScore(score: ScoreInterface);

    /**
     * 
     * @param {number} index
     */
    removeScore(index: number);

    /**
     * 
     * @returns {Array<ScoreInterface>}
     */
    getScores(): Array<ScoreInterface>;
}