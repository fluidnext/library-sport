"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMatch_1 = require("../AbstractMatch");
const BasketTeam_1 = require("./BasketTeam");
class BasketMatch extends AbstractMatch_1.AbstractMatch {
    /**
     *
     * @param  {TeamInterface} home
     * @param  {TeamInterface} guest
     */
    constructor(home = new BasketTeam_1.BasketTeam(), guest = new BasketTeam_1.BasketTeam()) {
        super();
        this.homeTeam = home;
        this.guestTeam = guest;
    }
}
exports.BasketMatch = BasketMatch;
