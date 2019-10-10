export class AbstractMatch {
    constructor() {
        /**
         *
         * @returns {TeamInterface}
         */
        this.getHomeTeam = () => {
            return this.homeTeam;
        };
        /**
         *
         * @returns {TeamInterface}
         */
        this.getGuestTeam = () => {
            return this.guestTeam;
        };
    }
    /**
     *
     * @param {TeamInterface} team
     */
    setHomeTeam(team) {
        this.homeTeam = team;
    }
    /**
     *
     * @param {TeamInterface} team
     */
    setGuestTeam(team) {
        this.guestTeam = team;
    }
}
//# sourceMappingURL=AbstractMatch.js.map