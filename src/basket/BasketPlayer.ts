import { AbstractPlayer } from "../player/AbstractPlayer";

export class BasketPlayer extends AbstractPlayer{

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
    constructor(name: string, number: string) {
        super();
        this.shirtName = name;
        this.shirtNumber = number;
    }

    /**
     * 
     * @param {string} name
     */
    public setFirstName = (name: string) => {
        this.firstName = name;
    }

    /**
     * 
     * @returns {string}
     */
    public getFirstName = () => {
        return this.firstName;
    }

    /**
     * 
     * @param  {string} name
     */
    public setLastName = (name: string) => {
        this.lastName = name;
    }

    /**
     * 
     * @returns {string}
     */
    public getLastName = () => {
        return this.lastName;
    }
    
    
    /**
     * 
     * @param  {string} name
     */
    public setShirtName = (name: string) => {
        this.shirtName = name;
    }

    /**
     * 
     * @returns {string}
     */
    public getShirtName = () => {
        return this.shirtName;
    }

    /**
     * 
     * @param  {string} number
     */
    public setShirtNumber = (number: string) => {
        this.shirtNumber = number;
    }

    /**
     * 
     * @returns {string}
     */
    public getShirtNumber = () => {
        return this.shirtNumber;
    }

    /**
     * 
     * @param  {number} points
     */
    public addPoints(points: number) {
        this.points += points;
    }
};