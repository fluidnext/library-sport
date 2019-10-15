import { AbstractMatch } from '../AbstractMatch';
import { TeamInterface } from '../TeamInterface';
import { MatchInterface } from '../MatchInterface';

export class BasketMatch extends AbstractMatch implements MatchInterface{
    
    /**
     * 
     * @param  {TeamInterface} home
     * @param  {TeamInterface} guest
     */
    constructor(home: TeamInterface, guest: TeamInterface){
        super();
        this.homeTeam = home;
        this.guestTeam = guest;
    }
}