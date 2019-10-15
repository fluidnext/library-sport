import { AbstractTeam } from "../AbstractTeam";
import { TeamInterface } from "../TeamInterface";
import { PlayerInterface } from "../PlayerInterface";

export class SoccerTeam extends AbstractTeam implements TeamInterface {

    /**
     * 
     * @param {string} name
     * @param {boolean} main
     */
    constructor(name: string, main: boolean){
        super();
        this.name = name;
        this.main = main === true ? main : false;
    }

    /**
     * 
     * @param {string} number
     * @returns {PlayerInterface}
     */
    public getPlayerByNumber(number: string): PlayerInterface {
        return this.players.find(pl => {
            return pl.getShirtNumber() === number;
        });
    }
}