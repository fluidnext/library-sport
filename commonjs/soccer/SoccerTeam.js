"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractTeam_1 = require("../AbstractTeam");
/**
 * @class SoccerTeam
 */
class SoccerTeam extends AbstractTeam_1.AbstractTeam {
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
exports.SoccerTeam = SoccerTeam;
