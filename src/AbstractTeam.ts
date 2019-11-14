import { PlayerInterface } from './PlayerInterface';
import { ScoreInterface } from './ScoreInterface';

/**
 * @class AbstractTeam
 */
export abstract class AbstractTeam {
    
    /**
     * 
     * @type {string}
     */
    protected name: string = '';

    /**
     * 
     * @type {Array<PlayerInterface>}
     */
    protected players: Array<PlayerInterface> = [];

    /**
     * @param {string} name
     * @returns {AbstractTeam}
     */
    public setName(name: string): AbstractTeam {
        this.name = name;
        return this;
    };

    /**
     * @returns {string}
     */
    public getName(): string {
        return this.name;
    };

    /**
     * @returns {Array<ScoreInterface>}
     */
    public abstract getScores();

    /**
     * @param {PlayerInterface} player
     * @returns {AbstractTeam}
     */
    public addPlayer(player: PlayerInterface): AbstractTeam {
        this.players.push(player);
        return this;
    };

    /**
     * @param {number} index
     * @param {PlayerInterface} player
     * @returns {AbstractTeam}
     */
    addPlayerByIndex(index: number, player: PlayerInterface): AbstractTeam {
        this.players[index] = player;
        return this;
    }

    /**
     *
     * @param {string} shirtNumber
     * @returns {PlayerInterface}
     */
    public getPlayerByShirtNumber(shirtNumber: string): PlayerInterface {
        return this.players.find(pl => {
            return pl.getShirtNumber() === shirtNumber;
        });
    }

    /**
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