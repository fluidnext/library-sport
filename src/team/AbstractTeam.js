export class AbstractTeam {
    constructor() {
        /**
         *
         * @returns {string}
         */
        this.getName = () => {
            return this.name;
        };
        /**
         *
         * @returns {any}
         */
        this.getPoints = () => {
            return this.points;
        };
        /**
         *
         * @returns {Array<PlayerInterface>}
         */
        this.getPlayers = () => {
            return this.players;
        };
    }
}
//# sourceMappingURL=AbstractTeam.js.map