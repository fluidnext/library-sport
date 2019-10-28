import { AbstractTeam } from "../AbstractTeam";
/**
 * @class SoccerTeam
 */
export class SoccerTeam extends AbstractTeam {
    /**
     * @inheritDoc
     */
    getScores() {
        let scores = [];
        this.players.forEach(player => {
            if (player.getScores().length > 0) {
                scores.concat(player.getScores());
            }
        });
        return scores;
    }
}
//# sourceMappingURL=SoccerTeam.js.map