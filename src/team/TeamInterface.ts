import { PlayerInterface } from "../player/PlayerInterface";

export interface TeamInterface {

    /**
     * 
     * @param {string} name
     */
    setName(name: string);

    /**
     * 
     * @returns {string}
     */
    getName: () => string;
    
    /**
     * 
     * @param {any} points
     */
    addPoints(points: any);

    /**
     * 
     * @returns {any}
     */
    getPoints: () => any;

    /**
     * 
     * @param {PlayerInterface} player
     */
    addPlayer(player: PlayerInterface);

    /**
     * 
     * @returns {Array<PlayerInterface>}
     */
    getPlayers: () => Array<PlayerInterface>;
}