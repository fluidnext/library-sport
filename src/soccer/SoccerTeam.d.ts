import { AbstractTeam } from "../AbstractTeam";
import { TeamInterface } from "../TeamInterface";
/**
 * @class SoccerTeam
 */
export declare class SoccerTeam extends AbstractTeam implements TeamInterface {
    /**
     * @inheritDoc
     */
    getScores(): any[];
}
