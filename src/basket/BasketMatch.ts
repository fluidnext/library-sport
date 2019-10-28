import { AbstractMatch } from '../AbstractMatch';
import { TeamInterface } from '../TeamInterface';
import { MatchInterface } from '../MatchInterface';
import {BasketTeam} from "./BasketTeam";

/**
 * @class BasketMatch
 */
export class BasketMatch extends AbstractMatch implements MatchInterface{

    /**
     * @type number
     */
    protected period: number = 0;

    /**
     * @param  {TeamInterface} home
     * @param  {TeamInterface} guest
     */
    constructor(home: TeamInterface = new BasketTeam(), guest: TeamInterface = new BasketTeam()){
        super();
        this.homeTeam = home;
        this.guestTeam = guest;
    }

    /**
     * @return number
     */
    getPeriod(): number {
        return this.period;
    }

    /**
     * @param value
     * @return {BasketMatch}
     */
    setPeriod(value: number) {
        this.period = value;
        return this;
    }
}