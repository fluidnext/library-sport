import { AbstractTeam } from '../AbstractTeam';
export class BasketTeam extends AbstractTeam {
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