"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractScore_1 = require("../AbstractScore");
/**
 * @class SoccerScore
 */
class SoccerScore extends AbstractScore_1.AbstractScore {
    /**
     *
     * @param {Object} infoScore
     */
    constructor(infoScore) {
        super();
        this.value = 1;
        this.info = infoScore;
    }
}
exports.SoccerScore = SoccerScore;
