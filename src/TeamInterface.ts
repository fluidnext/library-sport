import { PlayerInterface } from "./PlayerInterface";
import { ScoreInterface } from "./ScoreInterface";

export interface TeamInterface {

    /**
     * 
     * @param {string} name
     * @returns {TeamInterface}
     */
    setName(name: string): TeamInterface;

    /**
     * 
     * @returns {string}
     */
    getName(): string;
    
    /**
     * 
     * @param {ScoreInterface} score
     * @returns {TeamInterface}
     */
    addScore(score: ScoreInterface): TeamInterface;

    /**
     * 
     * @param {number} index
     * @returns {TeamInterface}
     */
    removeScore(index: number): TeamInterface;

    /**
     * 
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
}