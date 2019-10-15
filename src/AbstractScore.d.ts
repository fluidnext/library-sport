export declare abstract class AbstractScore {
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
    protected playerId: string;
    /**
     *
     * @param {number} value
     */
    setValue(value: number): AbstractScore;
    /**
     *
     * @returns {number}
     */
    getValue(): number;
    /**
     *
     * @param {Date} time
     * @returns {AbstractScore}
     */
    setTime(time: Date): AbstractScore;
    /**
     *
     * @returns {Date}
     */
    getTime(): Date;
    /**
     *
     * @param {string} id
     * @returns {AbstractScore}
     */
    setPlayerId(id: string): AbstractScore;
    /**
     *
     * @returns {string}
     */
    getPlayerId(): string;
}
