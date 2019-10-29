import { AbstractTeam } from '../AbstractTeam';
import { TeamInterface } from '../TeamInterface';
import { ScoreInterface } from '../ScoreInterface';
/**
 * @class BasketTeam
 */
export declare class BasketTeam extends AbstractTeam implements TeamInterface {
    /**
     * @type number
     */
    protected fouls: number;
    /**
     * @type number
     */
    protected timeOut: number;
    /**
     * @type {Array<ScoreInterface>}
     */
    protected scores: Array<ScoreInterface>;
    /**
     * @returns {number}
     * TODO change name and shift to interface
     */
    getTotalScore(): number;
    /**
     * @inheritDoc
     */
    getScores(): any[];
    /**
     * @param {Array<ScoreInterface>} scores
     */
    setScores(scores: Array<ScoreInterface>): BasketTeam;
    /**
     * @return {number}
     */
    getTimeOut(): number;
    /**
     * @param {number} timeOut
     */
    setTimeOut(timeOut: number): this;
    /**
     * @return {number}
     */
    getFouls(): number;
    /**
     * @param {number} fouls
     */
    setFouls(fouls: number): this;
}
