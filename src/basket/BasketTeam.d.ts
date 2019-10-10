import { AbstractTeam } from '../team/AbstractTeam';
import { PlayerInterface } from '../player/PlayerInterface';
export declare class BasketTeam extends AbstractTeam {
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
     * @type {number}
     */
    protected points: number;
    /**
     *
     * @param {string} name
     * @param {boolean} main
     */
    constructor(name: string, main: boolean);
    /**
     *
     * @param {string} name
     */
    setName: (name: string) => void;
    /**
     *
     * @returns {string}
     */
    getName: () => string;
    /**
     *
     * @returns {boolean}
     */
    isMainTeam: () => boolean;
    /**
     *
     * @param {PlayerInterface} player
     */
    addPlayer: (player: PlayerInterface) => void;
    /**
     *
     * @param {PlayerInterface} player
     * @param {number} index
     */
    setPlayerByIndex: (player: PlayerInterface, index: number) => void;
    /**
     *
     * @returns {Array<PlayerInterface>}
     */
    getPlayers: () => PlayerInterface[];
    /**
     *
     * @param {number} index
     */
    getPlayerByIndex: (index: number) => PlayerInterface;
    /**
     *
     * @param {number} points
     */
    addPoints(points: number): void;
    /**
     *
     * @returns {number}
     */
    getPoints: () => number;
}
