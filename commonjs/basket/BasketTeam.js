"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractTeam_1 = require("../AbstractTeam");
class BasketTeam extends AbstractTeam_1.AbstractTeam {
    /**
     *
     * @param {string} name
     * @param {boolean} main
     */
    constructor(name, main) {
        super();
        /**
         *
         * @type {Array<PlayerInterface>}
         */
        this.players = [];
        this.name = name;
        this.main = main === true ? main : false;
    }
    /**
     *
     * @param {PlayerInterface} player
     * @param {number} index
     * @returns {BasketTeam}
     */
    setPlayerByIndex(player, index) {
        this.players[index] = player;
        return this;
    }
    /**
     *
     * @param {number} index
     * @returns {PlayerInterface}
     */
    getPlayerByIndex(index) {
        return this.players[index];
    }
    /**
     *
     * @returns {number}
     */
    getTotalScore() {
        let result = 0;
        this.scores.forEach(score => {
            result += score.getValue();
        });
        return result;
    }
}
exports.BasketTeam = BasketTeam;
