"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMatch_1 = require("../match/AbstractMatch");
class BasketMatch extends AbstractMatch_1.AbstractMatch {
    /**
     *
     * @param  {TeamInterface} home
     * @param  {TeamInterface} guest
     */
    constructor(home, guest) {
        super();
        /**
         *
         * @param  {TeamInterface} team
         */
        this.setHomeTeam = (team) => {
            this.homeTeam = team;
        };
        /**
         *
         * @returns {TeamInterface}
         */
        this.getHomeTeam = () => {
            return this.homeTeam;
        };
        /**
         *
         * @param  {TeamInterface} team
         */
        this.setGuestTeam = (team) => {
            this.guestTeam = team;
        };
        /**
         *
         * @returns {TeamInterface}
         */
        this.getGuestTeam = () => {
            return this.guestTeam;
        };
        this.homeTeam;
    }
}
exports.BasketMatch = BasketMatch;
