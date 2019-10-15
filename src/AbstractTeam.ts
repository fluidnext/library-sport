import { PlayerInterface } from './PlayerInterface';
import { ScoreInterface } from './ScoreInterface';

export abstract class AbstractTeam{
    
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
     * @type {Array<ScoreInterface>}
     */
    protected scores: Array<ScoreInterface> = [];

    /**
     * 
     * @type {Array<PlayerInterface>}
     */
    protected players: Array<PlayerInterface> = [];

    /**
     * 
     * @returns {boolean}
     */
    public isMainTeam(): boolean {
        return this.main;
    }

    /**
     * 
     * @param {string} name
     * @returns {AbstractTeam}
     */
    public setName(name: string): AbstractTeam {
        this.name = name;
        return this;
    };

    /**
     * 
     * @returns {string}
     */
    public getName(): string {
        return this.name;
    };

    /**
     * 
     * @param {ScoreInterface} score
     * @returns {AbstractTeam}
     */
    public addScore(score: ScoreInterface): AbstractTeam {
        this.scores.push(score);
        return this;
    };

    /**
     * 
     * @param {number} index
     * @returns {AbstractTeam}
     */
    public removeScore(index: number): AbstractTeam {
        this.scores.splice(index, 1);
        return this;
    }

    /**
     * 
     * @returns {Array<ScoreInterface>}
     */
    public getScores(): Array<ScoreInterface> {
        return this.scores;
    };

    /**
     * 
     * @param {PlayerInterface} player
     * @returns {AbstractTeam}
     */
    public addPlayer(player: PlayerInterface): AbstractTeam {
        this.players.push(player);
        return this;
    };

    /**
     * 
     * @param {PlayerInterface} player
     * @returns {AbstractTeam}
     */
    public removePlayer(player: PlayerInterface): AbstractTeam {
        let pl = this.players.find((pl) => {
            return pl.getShirtNumber() === player.getShirtNumber();
        });
        this.players.splice(this.players.indexOf(pl), 1);
        return this;
    }

    /**
     * 
     * @returns {Array<PlayerInterface>}
     */
    public getPlayers(): Array<PlayerInterface> {
        return this.players;
    };
}