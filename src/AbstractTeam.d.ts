import { PlayerInterface } from './PlayerInterface';
import { ScoreInterface } from './ScoreInterface';
export declare abstract class AbstractTeam {
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
     * @type {Array<ScoreInterface>}
     */
    protected scores: Array<ScoreInterface>;
    /**
     *
     * @type {Array<PlayerInterface>}
     */
    protected players: Array<PlayerInterface>;
    /**
     *
     * @returns {boolean}
     */
    isMainTeam(): boolean;
    /**
     *
     * @param {string} name
     * @returns {AbstractTeam}
     */
    setName(name: string): AbstractTeam;
    /**
     *
     * @returns {string}
     */
    getName(): string;
    /**
     *
     * @param {ScoreInterface} score
     * @returns {AbstractTeam}
     */
    addScore(score: ScoreInterface): AbstractTeam;
    /**
     *
     * @param {number} index
     * @returns {AbstractTeam}
     */
    removeScore(index: number): AbstractTeam;
    /**
     *
     * @returns {Array<ScoreInterface>}
     */
    getScores(): ScoreInterface[];
    /**
     *
     * @param {PlayerInterface} player
     * @returns {AbstractTeam}
     */
    addPlayer(player: PlayerInterface): AbstractTeam;
    /**
     *
     * @returns {Array<PlayerInterface>}
     */
    getPlayers(): PlayerInterface[];
}
