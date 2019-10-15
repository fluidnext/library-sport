import { TeamInterface } from "./TeamInterface";

export interface MatchInterface{

    /**
     * 
     * @param {TeamInterface} team
     * @returns {MatchInterface}
     */
    setHomeTeam(team: TeamInterface): MatchInterface;
    
    /**
     * 
     * @param {TeamInterface} team
     * @returns {MatchInterface}
     */
    setGuestTeam(team: TeamInterface): MatchInterface;

    /**
     * 
     * @returns {TeamInterface}
     */
    getHomeTeam(): TeamInterface;
    
    /**
     * 
     * @returns {TeamInterface}
     */
    getGuestTeam(): TeamInterface;
    
    /**
     * 
     * @param {Date} date
     * @returns {MatchInterface}
     */
    setDate(date: Date): MatchInterface;

    /**
     * 
     * @returns {Date}
     */
    getDate(): Date;
}