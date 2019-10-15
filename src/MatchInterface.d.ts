import { TeamInterface } from "./TeamInterface";
export interface MatchInterface {
    /**
     *
     * @param {TeamInterface} team
     */
    setHomeTeam(team: TeamInterface): any;
    /**
     *
     * @param {TeamInterface} team
     */
    setGuestTeam(team: TeamInterface): any;
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
