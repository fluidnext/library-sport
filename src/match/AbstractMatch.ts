import { MatchInterface } from './MatchInterface';
import { TeamInterface } from '../team/TeamInterface';

export abstract class AbstractMatch implements MatchInterface{
    
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
    public setHomeTeam(team: TeamInterface) {
        this.homeTeam = team;
    }

    /**
     * 
     * @param {TeamInterface} team
     */
    public setGuestTeam(team: TeamInterface) {
        this.guestTeam = team;
    }

    /**
     * 
     * @returns {TeamInterface}
     */
    public getHomeTeam = () => {
        return this.homeTeam;
    };

    /**
     * 
     * @returns {TeamInterface}
     */
    public getGuestTeam = () => {
        return this.guestTeam;
    };
}