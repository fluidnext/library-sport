import { AbstractMatch } from '../match/AbstractMatch';
import { TeamInterface } from '../team/TeamInterface';

export class BasketMatch extends AbstractMatch{
    
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
    constructor(home: TeamInterface, guest: TeamInterface){
        super();
        this.homeTeam
    }

    /**
     * 
     * @param  {TeamInterface} team
     */
    public setHomeTeam = (team: TeamInterface) => {
        this.homeTeam = team;
    }

    /**
     * 
     * @returns {TeamInterface}
     */
    public getHomeTeam = () => {
        return this.homeTeam;
    }
    
    /**
     * 
     * @param  {TeamInterface} team
     */
    public setGuestTeam = (team: TeamInterface) => {
        this.guestTeam = team;
    }

    /**
     * 
     * @returns {TeamInterface}
     */
    public getGuestTeam = () => {
        return this.guestTeam;
    }
}