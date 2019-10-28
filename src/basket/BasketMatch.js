import { AbstractMatch } from '../AbstractMatch';
import { BasketTeam } from "./BasketTeam";
/**
 * @class BasketMatch
 */
export class BasketMatch extends AbstractMatch {
    /**
     * @param  {TeamInterface} home
     * @param  {TeamInterface} guest
     */
    constructor(home = new BasketTeam(), guest = new BasketTeam()) {
        super();
        /**
         * @type number
         */
        this.period = 0;
        this.homeTeam = home;
        this.guestTeam = guest;
    }
    /**
     * @return number
     */
    getPeriod() {
        return this.period;
    }
    /**
     * @param value
     * @return {BasketMatch}
     */
    setPeriod(value) {
        this.period = value;
        return this;
    }
}
//# sourceMappingURL=BasketMatch.js.map