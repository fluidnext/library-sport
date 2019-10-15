import { PlayerInterface } from "./PlayerInterface";
import { ScoreInterface } from "./ScoreInterface";

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
    getName():string;
    
    /**
     * 
     * @param {ScoreInterface} score
     */
    addScore(score: ScoreInterface);

    /**
     * 
     * @param {number} index
     */
    removeScore(index: number);

    /**
     * 
     * @returns {Array<ScoreInterface>}
     */
    getScores():Array<ScoreInterface>;

    /**
     * 
     * @param {PlayerInterface} player
     */
    addPlayer(player: PlayerInterface);

    /**
     * 
     * @returns {Array<PlayerInterface>}
     */
    getPlayers():Array<PlayerInterface>;
}