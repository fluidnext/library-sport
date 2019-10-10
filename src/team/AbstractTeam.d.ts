import { TeamInterface } from './TeamInterface';
import { PlayerInterface } from '../player/PlayerInterface';
export declare abstract class AbstractTeam implements TeamInterface {
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
     * @type {any}
     */
    protected points: any;
    /**
     *
     * @type {Array<PlayerInterface>}
     */
    protected players: Array<PlayerInterface>;
    /**
     *
     * @param {string} name
     */
    abstract setName(name: string): any;
    /**
     *
     * @returns {string}
     */
    getName: () => string;
    /**
     *
     * @param {any} points
     */
    abstract addPoints(points: any): any;
    /**
     *
     * @returns {any}
     */
    getPoints: () => any;
    /**
     *
     * @param {PlayerInterface} player
     */
    abstract addPlayer(player: PlayerInterface): any;
    /**
     *
     * @returns {Array<PlayerInterface>}
     */
    getPlayers: () => PlayerInterface[];
}
