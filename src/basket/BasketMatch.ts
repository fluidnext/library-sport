import { AbstractMatch } from '../AbstractMatch';
import { TeamInterface } from '../TeamInterface';
import { MatchInterface } from '../MatchInterface';
import {BasketTeam} from "./BasketTeam";

export class BasketMatch extends AbstractMatch implements MatchInterface{
    
    /**
     * 
     * @param  {TeamInterface} home
     * @param  {TeamInterface} guest
     */
    constructor(home: TeamInterface = new BasketTeam(), guest: TeamInterface = new BasketTeam()){
        super();
        this.homeTeam = home;
        this.guestTeam = guest;
    }
}