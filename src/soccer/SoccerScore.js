import { AbstractScore } from "../AbstractScore";
export class SoccerScore extends AbstractScore {
    /**
     *
     * @param {Date} scoreTime
     */
    constructor(scoreTime) {
        super();
        this.value = 1;
        this.time = scoreTime;
    }
}
//# sourceMappingURL=SoccerScore.js.map