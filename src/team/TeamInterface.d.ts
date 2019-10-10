import { PlayerInterface } from "../player/PlayerInterface";
export interface TeamInterface {
    /**
     *
     * @param {string} name
     */
    setName(name: string): any;
    /**
     *
     * @returns {string}
     */
    getName: () => string;
    /**
     *
     * @param {any} points
     */
    addPoints(points: any): any;
    /**
     *
     * @returns {any}
     */
    getPoints: () => any;
    /**
     *
     * @param {PlayerInterface} player
     */
    addPlayer(player: PlayerInterface): any;
    /**
     *
     * @returns {Array<PlayerInterface>}
     */
    getPlayers: () => Array<PlayerInterface>;
}
