"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractScore_1 = require("../AbstractScore");
/**
 * @class BasketScore
 */
class BasketScore extends AbstractScore_1.AbstractScore {
    /**
     * @param {number} value
     */
    constructor(value) {
        super();
        this.value = value;
    }
}
exports.BasketScore = BasketScore;
