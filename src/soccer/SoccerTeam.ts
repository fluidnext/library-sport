import { AbstractTeam } from "../AbstractTeam";
import { TeamInterface } from "../TeamInterface";
import {BasketTeam} from "../basket/BasketTeam";

/**
 * @class SoccerTeam
 */
export class SoccerTeam extends AbstractTeam implements TeamInterface {

    /**
     * @inheritDoc
     */
    public getScores() {
        let scores = [];

        this.players.forEach(player => {
            if (player.getScores().length > 0) {
                scores.concat(player.getScores());
            }
        });

        return scores;
    }
}