import { ScoreInterface } from "./ScoreInterface";

export interface PlayerInterface {

    /**
     * 
     * @param {string} name
     * @returns {PlayerInterface}
     */
    setFirstName(name: string): PlayerInterface;

    /**
     * 
     * @return {string}
     */
    getFirstName(): string;

    /**
     * 
     * @param {string} name
     * @returns {PlayerInterface}
     */
    setLastName(name: string): PlayerInterface;
    
    /**
     * 
     * @return {string}
     */
    getLastName(): string;

    /**
     * 
     * @param {string} name
     * @returns {PlayerInterface}
     */
    setShirtName(name: string): PlayerInterface;

    /**
     * 
     * @return {string}
     */
    getShirtName(): string;

    /**
     * 
     * @param {string} number
     * @returns {PlayerInterface}
     */
    setShirtNumber(number: string): PlayerInterface;

    /**
     * 
     * @return {string}
     */
    getShirtNumber(): string;

    /**
     * 
     * @param {ScoreInterface} score
     * @returns {PlayerInterface}
     */
    addScore(score: ScoreInterface): PlayerInterface;

    /**
     * 
     * @param {number} index
     * @returns {PlayerInterface}
     */
    removeScore(index: number): PlayerInterface;

    /**
     * 
     * @returns {Array<ScoreInterface>}
     */
    getScores(): Array<ScoreInterface>;
}