import { AbstractScore } from "../AbstractScore";
import { ScoreInterface } from "../ScoreInterface";

/**
 * @class SoccerScore
 */
export class SoccerScore extends AbstractScore implements ScoreInterface {

    /**
     * 
     * @type {Object}
     */
    protected info: Object;

    /**
     * 
     * @param {Object} infoScore
     */
    constructor(infoScore: Object){
        super();
        this.value = 1;
        this.info = infoScore;
    }
}