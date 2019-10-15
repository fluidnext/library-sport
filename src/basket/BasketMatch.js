import { AbstractMatch } from '../AbstractMatch';
export class BasketMatch extends AbstractMatch {
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
//# sourceMappingURL=BasketMatch.js.map