import { AbstractMatch } from "../AbstractMatch";
import { SoccerTeam } from "./SoccerTeam";
/**
 * @class SoccerMatch
 */
export class SoccerMatch extends AbstractMatch {
    /**
     *
     * @param  {TeamInterface} home
     * @param  {TeamInterface} guest
     */
    constructor(home = new SoccerTeam(), guest = new SoccerTeam()) {
        super();
        this.homeTeam = home;
        this.guestTeam = guest;
    }
}
//# sourceMappingURL=SoccerMatch.js.map