import { AbstractTeam } from '../AbstractTeam';
import { PlayerInterface } from '../PlayerInterface';
import { TeamInterface } from '../TeamInterface';
export declare class BasketTeam extends AbstractTeam implements TeamInterface {
    /**
     *
     * @param {string} name
     * @param {boolean} main
     */
    constructor(name: string, main: boolean);
    /**
     *
     * @param {PlayerInterface} player
     * @param {number} index
     * @returns {BasketTeam}
     */
    setPlayerByIndex(player: PlayerInterface, index: number): BasketTeam;
    /**
     *
     * @param {string} number
     * @returns {PlayerInterface}
     */
    getPlayerByNumber(number: string): PlayerInterface;
    /**
     *
     * @returns {number}
     */
    getTotalScore(): number;
}
