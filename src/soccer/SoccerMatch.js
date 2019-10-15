import { AbstractMatch } from "../AbstractMatch";
export class SoccerMatch extends AbstractMatch {
    /**
     *
     * @param  {TeamInterface} home
     * @param  {TeamInterface} guest
     */
    constructor(home, guest) {
        super();
        this.homeTeam = home;
        this.guestTeam = guest;
    }
}
//# sourceMappingURL=SoccerMatch.js.map