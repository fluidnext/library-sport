import { TeamInterface } from "../team/TeamInterface";

export interface MatchInterface{

    /**
     * 
     * @param {TeamInterface} team
     */
    setHomeTeam(team: TeamInterface);
    
    /**
     * 
     * @param {TeamInterface} team
     */
    setGuestTeam(team: TeamInterface);

    /**
     * 
     * @returns {TeamInterface}
     */
    getHomeTeam: () => TeamInterface;
    
    /**
     * 
     * @returns {TeamInterface}
     */
    getGuestTeam: () => TeamInterface;
}