import { PlayerInterface } from './PlayerInterface';
/**
 * @class AbstractTeam
 */
export declare abstract class AbstractTeam {
    /**
     *
     * @type {string}
     */
    protected name: string;
    /**
     *
     * @type {Array<PlayerInterface>}
     */
    protected players: Array<PlayerInterface>;
    /**
     * @param {string} name
     * @returns {AbstractTeam}
     */
    setName(name: string): AbstractTeam;
    /**
     * @returns {string}
     */
    getName(): string;
    /**
     * @returns {Array<ScoreInterface>}
     */
    abstract getScores(): any;
    /**
     * @param {PlayerInterface} player
     * @returns {AbstractTeam}
     */
    addPlayer(player: PlayerInterface): AbstractTeam;
    /**
     * @param {number} index
     * @param {PlayerInterface} player
     * @returns {AbstractTeam}
     */
    addPlayerByIndex(index: number, player: PlayerInterface): AbstractTeam;
    /**
     *
     * @param {string} shirtNumber
     * @returns {PlayerInterface}
     */
    getPlayerByShirtNumber(shirtNumber: string): PlayerInterface;
    /**
     * @param {PlayerInterface} player
     * @returns {AbstractTeam}
     */
    removePlayer(player: PlayerInterface): AbstractTeam;
    /**
     *
     * @returns {Array<PlayerInterface>}
     */
    getPlayers(): Array<PlayerInterface>;
}
