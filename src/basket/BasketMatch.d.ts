import { AbstractMatch } from '../AbstractMatch';
import { TeamInterface } from '../TeamInterface';
import { MatchInterface } from '../MatchInterface';
/**
 * @class BasketMatch
 */
export declare class BasketMatch extends AbstractMatch implements MatchInterface {
    /**
     * @type number
     */
    protected period: number;
    /**
     * @type number
     */
    protected minute: number;
    /**
     * @type number
     */
    protected second: number;
    /**
     * @type number
     */
    protected secondTenths: number;
    /**
     * @type number
     */
    protected twentyFourSecond: number;
    /**
     * @param  {TeamInterface} home
     * @param  {TeamInterface} guest
     */
    constructor(home?: TeamInterface, guest?: TeamInterface);
    /**
     * @return number
     */
    getPeriod(): number;
    /**
     * @param value
     * @return {BasketMatch}
     */
    setPeriod(value: number): this;
    /**
     * @return {number}
     */
    getMinute(): number;
    /**
     * @param {number} minute
     * @return {BasketMatch}
     */
    setMinute(minute: any): this;
    /**
     * @return {number}
     */
    getSecond(): number;
    /**
     * @param {number} second
     * @return {BasketMatch}
     */
    setSecond(second: number): this;
    /**
     * @return {number}
     */
    getSecondTenths(): number;
    /**
     * @param {number} secondTenths
     * @return {BasketMatch}
     */
    setSecondTenths(secondTenths: number): this;
    /**
     * @return {number}
     */
    getTwentyFourSecond(): number;
    /**
     * @param {number} twentyFourSecond
     * @return {BasketMatch}
     */
    setTwentyFourSecond(twentyFourSecond: number): this;
}
