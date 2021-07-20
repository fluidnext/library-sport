import { AbstractScore } from "../AbstractScore";
import { ScoreInterface } from "../ScoreInterface";
/**
 * @class SoccerScore
 */
export declare class SoccerScore extends AbstractScore implements ScoreInterface {
    /**
     *
     * @type {Object}
     */
    protected info: Object;
    /**
     *
     * @param {Object} infoScore
     */
    constructor(infoScore: Object);
}
