import { AbstractTeam } from '../AbstractTeam';
import { PlayerInterface } from '../PlayerInterface';
import { TeamInterface } from '../TeamInterface';
import { ScoreInterface } from '../ScoreInterface';

export class BasketTeam extends AbstractTeam implements TeamInterface {

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
     * @type {Array<ScoreInterface>}
     */
    protected scores: Array<ScoreInterface>;

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
     * @param {PlayerInterface} player
     * @param {number} index
     * @returns {BasketTeam}
     */
    public setPlayerByIndex(player: PlayerInterface, index: number): BasketTeam {
        this.players[index] = player;
        return this;
    }

    /**
     * 
     * @param {number} index
     * @returns {PlayerInterface}
     */
    public getPlayerByIndex(index: number): PlayerInterface {
        return this.players[index];
    }

    /**
     * 
     * @returns {number}
     */
    public getTotalScore(): number {
        let result = 0;
        this.scores.forEach(score => {
            result += score.getValue();
        });
        return result;
    }
}