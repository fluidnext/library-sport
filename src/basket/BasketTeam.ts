import { AbstractTeam } from '../team/AbstractTeam';
import { PlayerInterface } from '../player/PlayerInterface';
import { TeamInterface } from '../team/TeamInterface';

export class BasketTeam extends AbstractTeam {

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
     * @type {Array<PlayerInterface>}
     */
    protected players: Array<PlayerInterface> = [];

    /**
     * 
     * @type {number}
     */
    protected points: number;

    /**
     * 
     * @param {string} name
     * @param {boolean} main
     */
    constructor(name: string, main: boolean){
        super();
        this.name = name;
        this.main = main;
    }

    /**
     * 
     * @param {string} name
     */
    public setName = (name: string) => {
        this.name = name;
    }

    /**
     * 
     * @returns {string}
     */
    public getName = () => {
        return this.name;
    }

    /**
     * 
     * @returns {boolean}
     */
    public isMainTeam = () => {
        return this.main;
    }
    
    /**
     * 
     * @param {PlayerInterface} player
     */
    public addPlayer = (player: PlayerInterface) => {
        this.players.push(player);
    }

    /**
     * 
     * @param {PlayerInterface} player
     * @param {number} index
     */
    public setPlayerByIndex = (player: PlayerInterface, index: number) => {
        this.players[index] = player;
    }

    /**
     * 
     * @returns {Array<PlayerInterface>}
     */
    public getPlayers = () => {
        return this.players;
    }

    /**
     * 
     * @param {number} index
     */
    public getPlayerByIndex = (index: number) => {
        return this.players[index];
    }

    /**
     * 
     * @param {number} points
     */
    public addPoints(points: number) {
        this.points += points;
    }

    /**
     * 
     * @returns {number}
     */
    public getPoints = () => {
        return this.points;
    }
}