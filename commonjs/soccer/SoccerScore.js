"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractScore_1 = require("../AbstractScore");
class SoccerScore extends AbstractScore_1.AbstractScore {
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
exports.SoccerScore = SoccerScore;
