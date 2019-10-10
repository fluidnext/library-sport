
import { PlayerInterface } from "./PlayerInterface";

export abstract class AbstractPlayer implements PlayerInterface{
    
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
     * @type {any}
     */
    protected points: any;

    /**
     * 
     * @param {string} name
     */
    public abstract setFirstName(name: string);

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
     */
    public abstract setLastName(name: string);

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
     */
    public abstract setShirtName(name: string);

    /**
     *
     * @returns {string}
     */
    public getShirtName = () => {
        return this.shirtName;
    };

    /**
     * 
     * @param {any} number
     */
    public abstract setShirtNumber(number: any);

    /**
     *
     * @returns {string}
     */
    public getShirtNumber = () => {
        return this.shirtNumber;
    };

    /**
     * 
     * @param {any} points
     */
    public abstract addPoints(points: any);

    /**
     * 
     * @returns {any}
     */
    public getPoints = () => {
        return this.points;
    }
}