import { PlayerInterface } from "./PlayerInterface";
export declare abstract class AbstractPlayer implements PlayerInterface {
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
    abstract setFirstName(name: string): any;
    /**
     *
     * @returns {string}
     */
    getFirstName: () => string;
    /**
     *
     * @param {string} name
     */
    abstract setLastName(name: string): any;
    /**
     *
     * @returns {string}
     */
    getLastName: () => string;
    /**
     *
     * @param {string} name
     */
    abstract setShirtName(name: string): any;
    /**
     *
     * @returns {string}
     */
    getShirtName: () => string;
    /**
     *
     * @param {any} number
     */
    abstract setShirtNumber(number: any): any;
    /**
     *
     * @returns {string}
     */
    getShirtNumber: () => string;
    /**
     *
     * @param {any} points
     */
    abstract addPoints(points: any): any;
    /**
     *
     * @returns {any}
     */
    getPoints: () => any;
}
