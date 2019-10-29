import { ScoreInterface } from "./ScoreInterface";
import {PlayerInterface} from "./PlayerInterface";

/**
 * @class AbstractPlayer
 */
export abstract class AbstractPlayer {
    
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
    protected scores: Array<ScoreInterface> = [];

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
    public getFirstName(): string {
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
    public getLastName(): string {
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
    public getShirtName(): string {
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
    public getShirtNumber(): string {
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
    public getScores(): Array<ScoreInterface> {
        return this.scores;
    }

    /**
     * @param  {Array<ScoreInterface>} scores
     * @return {PlayerInterface}
     */
    public setScores(scores: Array<ScoreInterface>): PlayerInterface  {
        this.scores = scores;
        return this;
    }
}