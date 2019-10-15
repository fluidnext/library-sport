import { AbstractTeam } from '../AbstractTeam';
export class BasketTeam extends AbstractTeam {
    /**
     *
     * @param {string} name
     * @param {boolean} main
     */
    constructor(name, main) {
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
    setPlayerByIndex(player, index) {
        this.players[index] = player;
        return this;
    }
    /**
     *
     * @param {string} number
     * @returns {PlayerInterface}
     */
    getPlayerByNumber(number) {
        return this.players.find(pl => {
            return pl.getShirtNumber() === number;
        });
    }
    /**
     *
     * @returns {number}
     */
    getTotalScore() {
        let result = 0;
        let playerResult = 0;
        this.players.forEach(pl => {
            pl.getScores().forEach(score => {
                playerResult += score.getValue();
            });
            result += playerResult;
        });
        return result;
    }
}
//# sourceMappingURL=BasketTeam.js.map