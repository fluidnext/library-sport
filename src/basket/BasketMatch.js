import { AbstractMatch } from '../AbstractMatch';
import { BasketTeam } from "./BasketTeam";
export class BasketMatch extends AbstractMatch {
    /**
     *
     * @param  {TeamInterface} home
     * @param  {TeamInterface} guest
     */
    constructor(home = new BasketTeam(), guest = new BasketTeam()) {
        super();
        this.homeTeam = home;
        this.guestTeam = guest;
    }
}
//# sourceMappingURL=BasketMatch.js.map