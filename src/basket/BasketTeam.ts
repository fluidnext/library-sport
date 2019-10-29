import { AbstractTeam } from '../AbstractTeam';
import { TeamInterface } from '../TeamInterface';
import { ScoreInterface } from '../ScoreInterface';

/**
 * @class BasketTeam
 */
export class BasketTeam extends AbstractTeam implements TeamInterface {

    /**
     * @type number
     */
    protected fouls: number = 0;

    /**
     * @type number
     */
    protected timeOut: number = 0;

    /**
     * @type {Array<ScoreInterface>}
     */
    protected scores: Array<ScoreInterface> = [];

    /**
     * @returns {number}
     * TODO change name and shift to interface
     */
    public getTotalScore(): number {
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

    /**
     * @inheritDoc
     */
    public getScores() {
        let scores = [];
        scores.concat(this.scores);
        this.players.forEach(player => {
            if (player.getScores().length > 0) {
                scores.concat(player.getScores());
            }
        });

        return scores;
    }

    /**
     * @param {Array<ScoreInterface>} scores
     */
    public setScores(scores: Array<ScoreInterface>): BasketTeam  {

        this.scores = scores;
        return this;
    }

    /**
     * @return {number}
     */
    getTimeOut(): number {
        return this.timeOut;
    }

    /**
     * @param {number} timeOut
     */
    setTimeOut(timeOut: number) {
        this.timeOut = timeOut;
        return this;
    }

    /**
     * @return {number}
     */
    getFouls(): number {
        return this.fouls;
    }

    /**
     * @param {number} fouls
     */
    setFouls(fouls: number) {
        this.fouls = fouls;
        return this;
    }


}