import { PlayerInterface } from "./PlayerInterface";
import { ScoreInterface } from "./ScoreInterface";
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
    getName(): string;
    /**
     *
     * @param {ScoreInterface} score
     */
    addScore(score: ScoreInterface): any;
    /**
     *
     * @param {number} index
     */
    removeScore(index: number): any;
    /**
     *
     * @returns {Array<ScoreInterface>}
     */
    getScores(): Array<ScoreInterface>;
    /**
     *
     * @param {PlayerInterface} player
     */
    addPlayer(player: PlayerInterface): any;
    /**
     *
     * @returns {Array<PlayerInterface>}
     */
    getPlayers(): Array<PlayerInterface>;
}
