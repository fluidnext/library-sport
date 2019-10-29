import { AbstractPlayer } from "../AbstractPlayer";
import { PlayerInterface } from "../PlayerInterface";
/**
 * @class SoccerPlayer
 */
export declare class SoccerPlayer extends AbstractPlayer implements PlayerInterface {
    /**
     *
     * @param {string} number
     * @param {string} name
     */
    constructor(number: string, name: string);
}
