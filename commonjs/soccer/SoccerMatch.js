"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMatch_1 = require("../AbstractMatch");
class SoccerMatch extends AbstractMatch_1.AbstractMatch {
    /**
     *
     * @param  {TeamInterface} home
     * @param  {TeamInterface} guest
     */
    constructor(home, guest) {
        super();
        this.homeTeam = home;
        this.guestTeam = guest;
    }
}
exports.SoccerMatch = SoccerMatch;
