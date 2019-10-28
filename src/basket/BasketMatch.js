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
        /**
         * @type number
         */
        this.minute = 0;
        /**
         * @type number
         */
        this.second = 0;
        /**
         * @type number
         */
        this.secondTenths = 0;
        /**
         * @type number
         */
        this.twentyFourSecond = 0;
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
    /**
     * @return {number}
     */
    getMinute() {
        return this.minute;
    }
    /**
     * @param {number} minute
     * @return {BasketMatch}
     */
    setMinute(minute) {
        this.minute = minute;
        return this;
    }
    /**
     * @return {number}
     */
    getSecond() {
        return this.second;
    }
    /**
     * @param {number} second
     * @return {BasketMatch}
     */
    setSecond(second) {
        this.second = second;
        return this;
    }
    /**
     * @return {number}
     */
    getSecondTenths() {
        return this.secondTenths;
    }
    /**
     * @param {number} secondTenths
     * @return {BasketMatch}
     */
    setSecondTenths(secondTenths) {
        this.secondTenths = secondTenths;
        return this;
    }
    /**
     * @return {number}
     */
    getTwentyFourSecond() {
        return this.twentyFourSecond;
    }
    /**
     * @param {number} twentyFourSecond
     * @return {BasketMatch}
     */
    setTwentyFourSecond(twentyFourSecond) {
        this.twentyFourSecond = twentyFourSecond;
        return this;
    }
}
//# sourceMappingURL=BasketMatch.js.map