"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractScore {
    /**
     *
     * @param {number} value
     */
    setValue(value) {
        this.value = value;
        return this;
    }
    /**
     *
     * @returns {number}
     */
    getValue() {
        return this.value;
    }
    /**
     *
     * @param {Date} time
     * @returns {AbstractScore}
     */
    setTime(time) {
        this.time = time;
        return this;
    }
    /**
     *
     * @returns {Date}
     */
    getTime() {
        return this.time;
    }
}
exports.AbstractScore = AbstractScore;
