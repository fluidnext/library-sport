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
    getFirstName: () => string;

    /**
     * 
     * @param {string} name
     */
    setLastName(name: string);
    
    /**
     * 
     * @return {string}
     */
    getLastName: () => string;

    /**
     * 
     * @param {string} name
     */
    setShirtName(name: string);

    /**
     * 
     * @return {string}
     */
    getShirtName: () => string;

    /**
     * 
     * @param {any} number
     */
    setShirtNumber(number: any);

    /**
     * 
     * @return {string}
     */
    getShirtNumber: () => string;

    /**
     * 
     * @param {any} points
     */
    addPoints(points: any);

    /**
     * 
     * @returns {any}
     */
    getPoints: () => any;
}