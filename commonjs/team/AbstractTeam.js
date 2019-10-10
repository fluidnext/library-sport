"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractTeam {
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
exports.AbstractTeam = AbstractTeam;
