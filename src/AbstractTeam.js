/**
 * @class AbstractTeam
 */
export class AbstractTeam {
    constructor() {
        /**
         *
         * @type {Array<PlayerInterface>}
         */
        this.players = [];
    }
    /**
     * @param {string} name
     * @returns {AbstractTeam}
     */
    setName(name) {
        this.name = name;
        return this;
    }
    ;
    /**
     * @returns {string}
     */
    getName() {
        return this.name;
    }
    ;
    /**
     * @param {PlayerInterface} player
     * @returns {AbstractTeam}
     */
    addPlayer(player) {
        this.players.push(player);
        return this;
    }
    ;
    /**
     * @param {number} index
     * @param {PlayerInterface} player
     * @returns {AbstractTeam}
     */
    addPlayerByIndex(index, player) {
        this.players[index] = player;
        return this;
    }
    /**
     *
     * @param {string} shirtNumber
     * @returns {PlayerInterface}
     */
    getPlayerByShirtNumber(shirtNumber) {
        return this.players.find(pl => {
            return pl.getShirtNumber() === shirtNumber;
        });
    }
    /**
     * @param {PlayerInterface} player
     * @returns {AbstractTeam}
     */
    removePlayer(player) {
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
    getPlayers() {
        return this.players;
    }
    ;
}
//# sourceMappingURL=AbstractTeam.js.map