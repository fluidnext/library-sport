import { PlayerInterface } from "./PlayerInterface";
import { ScoreInterface } from "./ScoreInterface";

/**
 * @interface TeamInterface
 */
export interface TeamInterface {

    /**
     * @param {string} name
     * @returns {TeamInterface}
     */
    setName(name: string): TeamInterface;

    /**
     * @returns {string}
     */
    getName(): string;

    /**
     * @returns {Array<ScoreInterface>}
     */
    getScores(): Array<ScoreInterface>;

    /**
     * 
     * @param {PlayerInterface} player
     * @returns {TeamInterface}
     */
    addPlayer(player: PlayerInterface): TeamInterface;

    /**
     * @param {number} index
     * @param {PlayerInterface} player
     * @returns {TeamInterface}
     */
    addPlayerByIndex(index: number, player: PlayerInterface): TeamInterface;

    /**
     * 
     * @param {PlayerInterface} player
     * @returns {TeamInterface}
     */
    removePlayer(player: PlayerInterface): TeamInterface;

    /**
     * 
     * @returns {Array<PlayerInterface>}
     */
    getPlayers(): Array<PlayerInterface>;

    /**
     * @return {PlayerInterface}
     */
    getPlayerByShirtNumber(shirtNumber: string): PlayerInterface;
}