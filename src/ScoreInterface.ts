export interface ScoreInterface {
    
    /**
     * 
     * @param {number} value
     * @returns {ScoreInterface}
     */
    setValue(value: number): ScoreInterface;

    /**
     * 
     * @returns {number}
     */
    getValue(): number;
    
    /**
     * 
     * @param {Date} date
     * @returns {ScoreInterface}
     */
    setTime(date: Date): ScoreInterface;

    /**
     * 
     * @returns {Date}
     */
    getTime(): Date;
}