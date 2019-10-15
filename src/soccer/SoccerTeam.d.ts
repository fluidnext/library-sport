import { AbstractTeam } from "../AbstractTeam";
import { TeamInterface } from "../TeamInterface";
import { PlayerInterface } from "../PlayerInterface";
export declare class SoccerTeam extends AbstractTeam implements TeamInterface {
    /**
     *
     * @param {string} name
     * @param {boolean} main
     */
    constructor(name: string, main: boolean);
    /**
     *
     * @param {string} number
     * @returns {PlayerInterface}
     */
    getPlayerByNumber(number: string): PlayerInterface;
}
