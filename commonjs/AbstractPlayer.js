"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractPlayer {
    constructor() {
        /**
         *
         * @returns {string}
         */
        this.getFirstName = () => {
            return this.firstName;
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
         * @returns {string}
         */
        this.getShirtName = () => {
            return this.shirtName;
        };
        /**
         *
         * @returns {string}
         */
        this.getShirtNumber = () => {
            return this.shirtNumber;
        };
        /**
         *
         * @returns {Array<ScoreInterface>}
         */
        this.getScores = () => {
            return this.scores;
        };
    }
    /**
     *
     * @param {string} name
     * @returns {AbstractPlayer}
     */
    setFirstName(name) {
        this.firstName = name;
        return this;
    }
    ;
    /**
     *
     * @param {string} name
     * @returns {AbstractPlayer}
     */
    setLastName(name) {
        this.lastName = name;
        return this;
    }
    ;
    /**
     *
     * @param {string} name
     * @returns {AbstractPlayer}
     */
    setShirtName(name) {
        this.shirtName = name;
        return this;
    }
    ;
    /**
     *
     * @param {string} number
     * @returns {AbstractPlayer}
     */
    setShirtNumber(number) {
        this.shirtNumber = number;
        return this;
    }
    ;
    /**
     *
     * @param {ScoreInterface} score
     * @returns {AbstractPlayer}
     */
    addScore(score) {
        this.scores.push(score);
        return this;
    }
    ;
    /**
     *
     * @param {number} index
     * @returns {AbstractPlayer}
     */
    removeScore(index) {
        this.scores.splice(index, 1);
        return this;
    }
}
exports.AbstractPlayer = AbstractPlayer;
