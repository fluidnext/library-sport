"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractTeam {
    /**
     *
     * @returns {boolean}
     */
    isMainTeam() {
        return this.main;
    }
    /**
     *
     * @param {string} name
     * @returns {AbstractTeam}
     */
    setName(name) {
        this.name = name;
        return this;
    }
    ;
    /**
     *
     * @returns {string}
     */
    getName() {
        return this.name;
    }
    ;
    /**
     *
     * @param {ScoreInterface} score
     * @returns {AbstractTeam}
     */
    addScore(score) {
        this.scores.push(score);
        return this;
    }
    ;
    /**
     *
     * @param {number} index
     * @returns {AbstractTeam}
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
    ;
    /**
     *
     * @param {PlayerInterface} player
     * @returns {AbstractTeam}
     */
    addPlayer(player) {
        this.players.push(player);
        return this;
    }
    ;
    /**
     *
     * @returns {Array<PlayerInterface>}
     */
    getPlayers() {
        return this.players;
    }
    ;
}
exports.AbstractTeam = AbstractTeam;
