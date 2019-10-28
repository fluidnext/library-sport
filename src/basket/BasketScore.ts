import { AbstractScore } from "../AbstractScore";
import { ScoreInterface } from "../ScoreInterface";

/**
 * @class BasketScore
 */
export class BasketScore extends AbstractScore implements ScoreInterface {
    
    /**
     * @param {number} value
     */
    constructor(value?: number){
        super();
        this.value = value;
    }
}