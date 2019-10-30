"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class AbstractMatch
 */
class AbstractMatch {
    /**
     *
     * @param {TeamInterface} team
     * @returns {AbstractMatch}
     */
    setHomeTeam(team) {
        this.homeTeam = team;
        return this;
    }
    /**
     *
     * @param {TeamInterface} team
     * @returns {AbstractMatch}
     */
    setGuestTeam(team) {
        this.guestTeam = team;
        return this;
    }
    /**
     *
     * @returns {TeamInterface}
     */
    getHomeTeam() {
        return this.homeTeam;
    }
    ;
    /**
     *
     * @returns {TeamInterface}
     */
    getGuestTeam() {
        return this.guestTeam;
    }
    ;
    /**
     *
     * @param {Date} date
     * @returns {AbstractMatch}
     */
    setDate(date) {
        this.date = date;
        return this;
    }
    /**
     *
     * @returns {Date}
     */
    getDate() {
        return this.date;
    }
}
exports.AbstractMatch = AbstractMatch;
