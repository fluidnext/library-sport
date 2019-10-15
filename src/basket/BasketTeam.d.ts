import { AbstractTeam } from '../AbstractTeam';
import { PlayerInterface } from '../PlayerInterface';
import { TeamInterface } from '../TeamInterface';
import { ScoreInterface } from '../ScoreInterface';
export declare class BasketTeam extends AbstractTeam implements TeamInterface {
    /**
     *
     * @type {string}
     */
    protected name: string;
    /**
     *
     * @type {boolean}
     */
    protected main: boolean;
    /**
     *
     * @type {Array<PlayerInterface>}
     */
    protected players: Array<PlayerInterface>;
    /**
     *
     * @type {Array<ScoreInterface>}
     */
    protected scores: Array<ScoreInterface>;
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
     * @param {number} index
     * @returns {PlayerInterface}
     */
    getPlayerByIndex(index: number): PlayerInterface;
    /**
     *
     * @returns {number}
     */
    getTotalScore(): number;
}
