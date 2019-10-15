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
     * @type {string}
     */
    protected playerId: string

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
    public getTime() {
        return this.time;
    }

    /**
     * 
     * @param {string} id
     * @returns {AbstractScore}
     */
    public setPlayerId(id: string) : AbstractScore {
        this.playerId = id;
        return this;
    }

    /**
     * 
     * @returns {string}
     */
    public getPlayerId() : string {
        return this.playerId;
    }
}