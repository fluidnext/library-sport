"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractTeam_1 = require("../AbstractTeam");
class BasketTeam extends AbstractTeam_1.AbstractTeam {
    constructor() {
        super(...arguments);
        /**
         * @type number
         */
        this.fouls = 0;
        /**
         * @type number
         */
        this.timeOut = 0;
        /**
         * @type {Array<ScoreInterface>}
         */
        this.scores = [];
    }
    /**
     * @returns {number}
     * TODO change name and shift to interface
     */
    getTotalScore() {
        let result = 0;
        let playerResult = 0;
        this.players.forEach(pl => {
            pl.getScores().forEach(score => {
                playerResult += score.getValue();
            });
            result += playerResult;
        });
        return result;
    }
    /**
     * @inheritDoc
     */
    getScores() {
        let scores = [];
        scores.concat(this.scores);
        this.players.forEach(player => {
            if (player.getScores().length > 0) {
                scores.concat(player.getScores());
            }
        });
        return scores;
    }
    /**
     * @param {Array<ScoreInterface>} scores
     */
    setScores(scores) {
        this.scores = scores;
        return this;
    }
    /**
     * @return {number}
     */
    getTimeOut() {
        return this.timeOut;
    }
    /**
     * @param {number} timeOut
     */
    setTimeOut(timeOut) {
        this.timeOut = timeOut;
        return this;
    }
    /**
     * @return {number}
     */
    getFouls() {
        return this.fouls;
    }
    /**
     * @param {number} fouls
     */
    setFouls(fouls) {
        this.fouls = fouls;
        return this;
    }
}
exports.BasketTeam = BasketTeam;
