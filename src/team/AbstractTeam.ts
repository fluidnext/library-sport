import { TeamInterface } from './TeamInterface';
import { PlayerInterface } from '../player/PlayerInterface';

export abstract class AbstractTeam implements TeamInterface{
    
    /**
     * 
     * @type {string}
     */
    protected name: string;
    
    /**
     * 
     * @type {boolean}
     */
    protected main: boolean;

    /**
     * 
     * @type {any}
     */
    protected points: any;

    /**
     * 
     * @type {Array<PlayerInterface>}
     */
    protected players: Array<PlayerInterface>

    /**
     * 
     * @param {string} name
     */
    public abstract setName(name: string);

    /**
     * 
     * @returns {string}
     */
    public getName = () => {
        return this.name;
    };

    /**
     * 
     * @param {any} points
     */
    public abstract addPoints(points: any);

    /**
     * 
     * @returns {any}
     */
    public getPoints = () => {
        return this.points;
    };

    /**
     * 
     * @param {PlayerInterface} player
     */
    public abstract addPlayer(player: PlayerInterface);

    /**
     * 
     * @returns {Array<PlayerInterface>}
     */
    public getPlayers = () => {
        return this.players;
    };
}