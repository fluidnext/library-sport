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
     * @type number
     */
    protected minute: number = 0;

    /**
     * @type number
     */
    protected second: number = 0;

    /**
     * @type number
     */
    protected secondTenths: number = 0;

    /**
     * @type number
     */
    protected twentyFourSecond: number = 0;

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
    getSecond(): number {
        return this.second;
    }

    /**
     * @param {number} second
     * @return {BasketMatch}
     */
    setSecond(second: number) {
        this.second = second;
        return this;
    }

    /**
     * @return {number}
     */
    getSecondTenths(): number {
        return this.secondTenths;
    }

    /**
     * @param {number} secondTenths
     * @return {BasketMatch}
     */
    setSecondTenths(secondTenths: number) {
        this.secondTenths = secondTenths;
        return this;
    }

    /**
     * @return {number}
     */
    getTwentyFourSecond(): number {
        return this.twentyFourSecond;
    }

    /**
     * @param {number} twentyFourSecond
     * @return {BasketMatch}
     */
    setTwentyFourSecond(twentyFourSecond: number) {
        this.twentyFourSecond = twentyFourSecond;
        return this;
    }
}