/**
 * @class AbstractScore
 */
export class AbstractScore {
    constructor() {
        /**
         *
         * @type {number}
         */
        this.value = 0;
    }
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
//# sourceMappingURL=AbstractScore.js.map