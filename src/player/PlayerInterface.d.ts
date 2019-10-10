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
    getFirstName: () => string;
    /**
     *
     * @param {string} name
     */
    setLastName(name: string): any;
    /**
     *
     * @return {string}
     */
    getLastName: () => string;
    /**
     *
     * @param {string} name
     */
    setShirtName(name: string): any;
    /**
     *
     * @return {string}
     */
    getShirtName: () => string;
    /**
     *
     * @param {any} number
     */
    setShirtNumber(number: any): any;
    /**
     *
     * @return {string}
     */
    getShirtNumber: () => string;
    /**
     *
     * @param {any} points
     */
    addPoints(points: any): any;
    /**
     *
     * @returns {any}
     */
    getPoints: () => any;
}
