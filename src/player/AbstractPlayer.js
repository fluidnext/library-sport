export class AbstractPlayer {
    constructor() {
        /**
         *
         * @returns {string}
         */
        this.getFirstName = () => {
            return this.firstName;
        };
        /**
         *
         * @returns {string}
         */
        this.getLastName = () => {
            return this.lastName;
        };
        /**
         *
         * @returns {string}
         */
        this.getShirtName = () => {
            return this.shirtName;
        };
        /**
         *
         * @returns {string}
         */
        this.getShirtNumber = () => {
            return this.shirtNumber;
        };
        /**
         *
         * @returns {any}
         */
        this.getPoints = () => {
            return this.points;
        };
    }
}
//# sourceMappingURL=AbstractPlayer.js.map