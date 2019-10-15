import { AbstractMatch } from '../AbstractMatch';
import { TeamInterface } from '../TeamInterface';
import { MatchInterface } from '../MatchInterface';
export declare class BasketMatch extends AbstractMatch implements MatchInterface {
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
}
