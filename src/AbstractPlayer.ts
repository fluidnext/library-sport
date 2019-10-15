import { ScoreInterface } from "./ScoreInterface";

export abstract class AbstractPlayer{
    
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
    public setFirstName(name: string): AbstractPlayer {
        this.firstName = name;
        return this;
    };

    /**
     * 
     * @returns {string}
     */
    public getFirstName = () => {
        return this.firstName;
    };

    /**
     *
     * @param {string} name
     * @returns {AbstractPlayer}
     */
    public setLastName(name: string): AbstractPlayer {
        this.lastName = name;
        return this;
    };

    /**
     *
     * @returns {string}
     */
    public getLastName =  () => {
        return this.lastName;
    };

    /**
     *
     * @param {string} name
     * @returns {AbstractPlayer}
     */
    public setShirtName(name: string): AbstractPlayer {
        this.shirtName = name;
        return this;
    };

    /**
     *
     * @returns {string}
     */
    public getShirtName = () => {
        return this.shirtName;
    };

    /**
     * 
     * @param {string} number
     * @returns {AbstractPlayer}
     */
    public setShirtNumber(number: string): AbstractPlayer {
        this.shirtNumber = number;
        return this;
    };

    /**
     *
     * @returns {string}
     */
    public getShirtNumber = () => {
        return this.shirtNumber;
    };

    /**
     * 
     * @param {ScoreInterface} score
     * @returns {AbstractPlayer}
     */
    public addScore(score: ScoreInterface): AbstractPlayer {
        this.scores.push(score);
        return this;
    };

    /**
     * 
     * @param {number} index
     * @returns {AbstractPlayer}
     */
    public removeScore(index: number): AbstractPlayer {
        this.scores.splice(index, 1);
        return this;
    }

    /**
     * 
     * @returns {Array<ScoreInterface>}
     */
    public getScores = () => {
        return this.scores;
    }
}