import { MatchInterface } from './MatchInterface';
import { TeamInterface } from '../team/TeamInterface';
export declare abstract class AbstractMatch implements MatchInterface {
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
     */
    setHomeTeam(team: TeamInterface): void;
    /**
     *
     * @param {TeamInterface} team
     */
    setGuestTeam(team: TeamInterface): void;
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
