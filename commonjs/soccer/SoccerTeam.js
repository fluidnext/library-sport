"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractTeam_1 = require("../AbstractTeam");
class SoccerTeam extends AbstractTeam_1.AbstractTeam {
    /**
     *
     * @param {string} name
     * @param {boolean} main
     */
    constructor(name, main) {
        super();
        this.name = name;
        this.main = main === true ? main : false;
    }
    /**
     *
     * @param {string} number
     * @returns {PlayerInterface}
     */
    getPlayerByNumber(number) {
        return this.players.find(pl => {
            return pl.getShirtNumber() === number;
        });
    }
}
exports.SoccerTeam = SoccerTeam;
