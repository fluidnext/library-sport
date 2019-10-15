import { AbstractTeam } from '../AbstractTeam';
import { PlayerInterface } from '../PlayerInterface';
import { TeamInterface } from '../TeamInterface';
import { ScoreInterface } from '../ScoreInterface';

export class BasketTeam extends AbstractTeam implements TeamInterface {
    
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
     * @param {string} number
     * @returns {PlayerInterface}
     */
    public getPlayerByNumber(number: string): PlayerInterface {
        return this.players.find(pl => {
            return pl.getShirtNumber() === number;
        });
    }

    /**
     * 
     * @returns {number}
     */
    public getTotalScore(): number {
        let result = 0;
        let playerResult = 0;
        this.players.forEach(pl => {
            pl.getScores().forEach(score => {
                playerResult += score.getValue();
            });
            result += playerResult;
        })
        return result;
    }
}