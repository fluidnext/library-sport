"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMatch_1 = require("../AbstractMatch");
const SoccerTeam_1 = require("./SoccerTeam");
/**
 * @class SoccerMatch
 */
class SoccerMatch extends AbstractMatch_1.AbstractMatch {
    /**
     *
     * @param  {TeamInterface} home
     * @param  {TeamInterface} guest
     */
    constructor(home = new SoccerTeam_1.SoccerTeam(), guest = new SoccerTeam_1.SoccerTeam()) {
        super();
        this.homeTeam = home;
        this.guestTeam = guest;
    }
}
exports.SoccerMatch = SoccerMatch;
