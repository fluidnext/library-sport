export interface ScoreInterface {
    /**
     *
     * @param {number} value
     */
    setValue(value: number): any;
    /**
     *
     * @returns {number}
     */
    getValue(): number;
    /**
     *
     * @param {Date} date
     */
    setTime(date: Date): any;
    /**
     *
     * @returns {Date}
     */
    getTime(): Date;
    /**
     *
     * @param {string} id
     */
    setPlayerId(id: string): any;
    /**
     *
     * @returns {string}
     */
    getPlayerId(): string;
}
