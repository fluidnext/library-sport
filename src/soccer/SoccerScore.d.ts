import { AbstractScore } from "../AbstractScore";
import { ScoreInterface } from "../ScoreInterface";
export declare class SoccerScore extends AbstractScore implements ScoreInterface {
    /**
     *
     * @param {Date} scoreTime
     */
    constructor(scoreTime: Date);
}
