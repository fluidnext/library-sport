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
     * @returns {AbstractMatch}
     */
    setHomeTeam(team) {
        this.homeTeam = team;
        return this;
    }
    /**
     *
     * @param {TeamInterface} team
     * @returns {AbstractMatch}
     */
    setGuestTeam(team) {
        this.guestTeam = team;
        return this;
    }
}
//# sourceMappingURL=AbstractMatch.js.map