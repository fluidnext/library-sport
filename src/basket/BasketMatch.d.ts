import { AbstractMatch } from '../match/AbstractMatch';
import { TeamInterface } from '../team/TeamInterface';
export declare class BasketMatch extends AbstractMatch {
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
     * @param  {TeamInterface} home
     * @param  {TeamInterface} guest
     */
    constructor(home: TeamInterface, guest: TeamInterface);
    /**
     *
     * @param  {TeamInterface} team
     */
    setHomeTeam: (team: TeamInterface) => void;
    /**
     *
     * @returns {TeamInterface}
     */
    getHomeTeam: () => TeamInterface;
    /**
     *
     * @param  {TeamInterface} team
     */
    setGuestTeam: (team: TeamInterface) => void;
    /**
     *
     * @returns {TeamInterface}
     */
    getGuestTeam: () => TeamInterface;
}
