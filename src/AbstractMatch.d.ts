import { TeamInterface } from './TeamInterface';
/**
 * @class AbstractMatch
 */
export declare abstract class AbstractMatch {
    /**
     *
     * @type {TeamInterface}
     */
    protected homeTeam: TeamInterface;
    /**
     *
     * @type {TeamInterface}
     */
    protected guestTeam: TeamInterface;
    /**
     *
     * @type {Date}
     */
    protected date: Date;
    /**
     *
     * @param {TeamInterface} team
     * @returns {AbstractMatch}
     */
    setHomeTeam(team: TeamInterface): AbstractMatch;
    /**
     *
     * @param {TeamInterface} team
     * @returns {AbstractMatch}
     */
    setGuestTeam(team: TeamInterface): AbstractMatch;
    /**
     *
     * @returns {TeamInterface}
     */
    getHomeTeam(): TeamInterface;
    /**
     *
     * @returns {TeamInterface}
     */
    getGuestTeam(): TeamInterface;
    /**
     *
     * @param {Date} date
     * @returns {AbstractMatch}
     */
    setDate(date: Date): AbstractMatch;
    /**
     *
     * @returns {Date}
     */
    getDate(): Date;
}
