import { AbstractScore } from "../AbstractScore";
import { ScoreInterface } from "../ScoreInterface";

export class SoccerScore extends AbstractScore implements ScoreInterface {

    /**
     * 
     * @param {Date} scoreTime
     */
    constructor(scoreTime: Date){
        super();
        this.value = 1;
        this.time = scoreTime;
    }
}