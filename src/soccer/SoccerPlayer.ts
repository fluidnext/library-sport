import { AbstractPlayer } from "../AbstractPlayer";
import { PlayerInterface } from "../PlayerInterface";

/**
 * @class SoccerPlayer
 */
export class SoccerPlayer extends AbstractPlayer implements PlayerInterface{

    /**
     * 
     * @param {string} number
     * @param {string} name
     */
    constructor(number: string, name: string){
        super();
        this.shirtNumber = number;
        this.shirtName = name;
    }
}