export class AbstractPlayer {
    constructor() {
        /**
         *
         * @type {Array<ScoreInterface>}
         */
        this.scores = [];
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
     * @returns {string}
     */
    getFirstName() {
        return this.firstName;
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
     * @returns {string}
     */
    getLastName() {
        return this.lastName;
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
     * @returns {string}
     */
    getShirtName() {
        return this.shirtName;
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
     * @returns {string}
     */
    getShirtNumber() {
        return this.shirtNumber;
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
    /**
     *
     * @returns {Array<ScoreInterface>}
     */
    getScores() {
        return this.scores;
    }
}
//# sourceMappingURL=AbstractPlayer.js.map