import { TeamInterface } from './TeamInterface';
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
    getHomeTeam: () => TeamInterface;
    /**
     *
     * @returns {TeamInterface}
     */
    getGuestTeam: () => TeamInterface;
}
