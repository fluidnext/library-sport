import { AbstractTeam } from '../AbstractTeam';
export class BasketTeam extends AbstractTeam {
    /**
     *
     * @param {string} name
     * @param {boolean} main
     */
    constructor(name, main) {
        super();
        /**
         *
         * @type {Array<PlayerInterface>}
         */
        this.players = [];
        this.name = name;
        this.main = main === true ? main : false;
    }
    /**
     *
     * @param {PlayerInterface} player
     * @param {number} index
     * @returns {BasketTeam}
     */
    setPlayerByIndex(player, index) {
        this.players[index] = player;
        return this;
    }
    /**
     *
     * @param {number} index
     * @returns {PlayerInterface}
     */
    getPlayerByIndex(index) {
        return this.players[index];
    }
    /**
     *
     * @returns {number}
     */
    getTotalScore() {
        let result = 0;
        this.scores.forEach(score => {
            result += score.getValue();
        });
        return result;
    }
}
//# sourceMappingURL=BasketTeam.js.map