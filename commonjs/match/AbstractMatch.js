"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractMatch {
    constructor() {
        /**
         *
         * @returns {TeamInterface}
         */
        this.getHomeTeam = () => {
            return this.homeTeam;
        };
        /**
         *
         * @returns {TeamInterface}
         */
        this.getGuestTeam = () => {
            return this.guestTeam;
        };
    }
    /**
     *
     * @param {TeamInterface} team
     */
    setHomeTeam(team) {
        this.homeTeam = team;
    }
    /**
     *
     * @param {TeamInterface} team
     */
    setGuestTeam(team) {
        this.guestTeam = team;
    }
}
exports.AbstractMatch = AbstractMatch;
