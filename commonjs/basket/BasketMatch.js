"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMatch_1 = require("../AbstractMatch");
const BasketTeam_1 = require("./BasketTeam");
/**
 * @class BasketMatch
 */
class BasketMatch extends AbstractMatch_1.AbstractMatch {
    /**
     * @param  {TeamInterface} home
     * @param  {TeamInterface} guest
     */
    constructor(home = new BasketTeam_1.BasketTeam(), guest = new BasketTeam_1.BasketTeam()) {
        super();
        /**
         * @type number
         */
        this.period = 0;
        this.homeTeam = home;
        this.guestTeam = guest;
    }
    /**
     * @return number
     */
    getPeriod() {
        return this.period;
    }
    /**
     * @param value
     * @return {BasketMatch}
     */
    setPeriod(value) {
        this.period = value;
        return this;
    }
}
exports.BasketMatch = BasketMatch;
