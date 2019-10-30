import { AbstractMatch } from "../AbstractMatch";
import { MatchInterface } from "../MatchInterface";
import { TeamInterface } from "../TeamInterface";
import {SoccerTeam} from "./SoccerTeam";

/**
 * @class SoccerMatch
 */
export class SoccerMatch extends AbstractMatch implements MatchInterface {

    /**
     * 
     * @param  {TeamInterface} home
     * @param  {TeamInterface} guest
     */
    constructor(home: TeamInterface = new SoccerTeam(), guest: TeamInterface = new SoccerTeam()) {
        super();
        this.homeTeam = home;
        this.guestTeam = guest;
    }
}