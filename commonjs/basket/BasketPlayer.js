"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractPlayer_1 = require("../player/AbstractPlayer");
class BasketPlayer extends AbstractPlayer_1.AbstractPlayer {
    /**
     *
     * @param {string} name
     * @param {string} number
     */
    constructor(name, number) {
        super();
        /**
         *
         * @param {string} name
         */
        this.setFirstName = (name) => {
            this.firstName = name;
        };
        /**
         *
         * @returns {string}
         */
        this.getFirstName = () => {
            return this.firstName;
        };
        /**
         *
         * @param  {string} name
         */
        this.setLastName = (name) => {
            this.lastName = name;
        };
        /**
         *
         * @returns {string}
         */
        this.getLastName = () => {
            return this.lastName;
        };
        /**
         *
         * @param  {string} name
         */
        this.setShirtName = (name) => {
            this.shirtName = name;
        };
        /**
         *
         * @returns {string}
         */
        this.getShirtName = () => {
            return this.shirtName;
        };
        /**
         *
         * @param  {string} number
         */
        this.setShirtNumber = (number) => {
            this.shirtNumber = number;
        };
        /**
         *
         * @returns {string}
         */
        this.getShirtNumber = () => {
            return this.shirtNumber;
        };
        this.shirtName = name;
        this.shirtNumber = number;
    }
    /**
     *
     * @param  {number} points
     */
    addPoints(points) {
        this.points += points;
    }
}
exports.BasketPlayer = BasketPlayer;
;
