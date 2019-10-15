export interface ScoreInterface {
    
    /**
     * 
     * @param {number} value
     */
    setValue(value: number);

    /**
     * 
     * @returns {number}
     */
    getValue(): number;
    
    /**
     * 
     * @param {Date} date
     */
    setTime(date: Date);

    /**
     * 
     * @returns {Date}
     */
    getTime(): Date;

    /**
     * 
     * @param {string} id
     */
    setPlayerId(id: string);

    /**
     * 
     * @returns {string}
     */
    getPlayerId():string;
}