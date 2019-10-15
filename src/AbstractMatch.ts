import { TeamInterface } from './TeamInterface';

export abstract class AbstractMatch{
    
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
    public setHomeTeam(team: TeamInterface): AbstractMatch {
        this.homeTeam = team;
        return this;
    }

    /**
     * 
     * @param {TeamInterface} team
     * @returns {AbstractMatch}
     */
    public setGuestTeam(team: TeamInterface): AbstractMatch {
        this.guestTeam = team;
        return this;
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