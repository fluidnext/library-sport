"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractPlayer_1 = require("../AbstractPlayer");
class SoccerPlayer extends AbstractPlayer_1.AbstractPlayer {
    /**
     *
     * @param {string} number
     * @param {string} name
     */
    constructor(number, name) {
        super();
        this.shirtNumber = number;
        this.shirtName = name;
    }
}
exports.SoccerPlayer = SoccerPlayer;
