import { AbstractMatch } from "../AbstractMatch";
import { MatchInterface } from "../MatchInterface";
import { TeamInterface } from "../TeamInterface";

export class SoccerMatch extends AbstractMatch implements MatchInterface {

    /**
     * 
     * @param  {TeamInterface} home
     * @param  {TeamInterface} guest
     */
    constructor(home: TeamInterface, guest: TeamInterface) {
        super();
        this.homeTeam = home;
        this.guestTeam = guest;
    }
}