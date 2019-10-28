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
}
