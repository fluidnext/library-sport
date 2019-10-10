"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractTeam_1 = require("../team/AbstractTeam");
class BasketTeam extends AbstractTeam_1.AbstractTeam {
    /**
     *
     * @param {string} name
     * @param {boolean} main
     */
    constructor(name, main) {
        super();
        /**
         *
         * @type {Array<PlayerInterface>}
         */
        this.players = [];
        /**
         *
         * @param {string} name
         */
        this.setName = (name) => {
            this.name = name;
        };
        /**
         *
         * @returns {string}
         */
        this.getName = () => {
            return this.name;
        };
        /**
         *
         * @returns {boolean}
         */
        this.isMainTeam = () => {
            return this.main;
        };
        /**
         *
         * @param {PlayerInterface} player
         */
        this.addPlayer = (player) => {
            this.players.push(player);
        };
        /**
         *
         * @param {PlayerInterface} player
         * @param {number} index
         */
        this.setPlayerByIndex = (player, index) => {
            this.players[index] = player;
        };
        /**
         *
         * @returns {Array<PlayerInterface>}
         */
        this.getPlayers = () => {
            return this.players;
        };
        /**
         *
         * @param {number} index
         */
        this.getPlayerByIndex = (index) => {
            return this.players[index];
        };
        /**
         *
         * @returns {number}
         */
        this.getPoints = () => {
            return this.points;
        };
        this.name = name;
        this.main = main;
    }
    /**
     *
     * @param {number} points
     */
    addPoints(points) {
        this.points += points;
    }
}
exports.BasketTeam = BasketTeam;
