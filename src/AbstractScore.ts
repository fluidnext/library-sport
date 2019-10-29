/**
 * @class AbstractScore
 */
export abstract class AbstractScore {
    
    /**
     * 
     * @type {number}
     */
    protected value: number;

    /**
     * 
     * @type {Date}
     */
    protected time: Date;

    /**
     * 
     * @param {number} value
     */
    public setValue(value: number): AbstractScore {
        this.value = value;
        return this;
    }

    /**
     * 
     * @returns {number}
     */
    public getValue() {
        return this.value;
    }

    /**
     * 
     * @param {Date} time
     * @returns {AbstractScore}
     */
    public setTime(time: Date): AbstractScore {
        this.time = time;
        return this;
    }

    /**
     * 
     * @returns {Date}
     */
    public getTime(): Date {
        return this.time;
    }
}