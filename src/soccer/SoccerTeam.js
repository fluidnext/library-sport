import { AbstractTeam } from "../AbstractTeam";
export class SoccerTeam extends AbstractTeam {
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
     * @param {string} number
     * @returns {PlayerInterface}
     */
    getPlayerByNumber(number) {
        return this.players.find(pl => {
            return pl.getShirtNumber() === number;
        });
    }
}
//# sourceMappingURL=SoccerTeam.js.map