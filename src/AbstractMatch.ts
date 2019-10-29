import { TeamInterface } from './TeamInterface';

/**
 * @class AbstractMatch
 */
export abstract class AbstractMatch {

    /**
     * 
     * @type {TeamInterface}
     */
    protected homeTeam: TeamInterface;

    /**
     * 
     * @type {TeamInterface}
     */
    protected guestTeam: TeamInterface;

    /**
     * 
     * @type {Date}
     */
    protected date: Date;

    /**
     * 
     * @param {TeamInterface} team
     * @returns {AbstractMatch}
     */
    public setHomeTeam(team: TeamInterface): AbstractMatch {
        this.homeTeam = team;
        return this;
    }

    /**
     * 
     * @param {TeamInterface} team
     * @returns {AbstractMatch}
     */
    public setGuestTeam(team: TeamInterface): AbstractMatch {
        this.guestTeam = team;
        return this;
    }

    /**
     * 
     * @returns {TeamInterface}
     */
    public getHomeTeam(): TeamInterface {
        return this.homeTeam;
    };

    /**
     * 
     * @returns {TeamInterface}
     */
    public getGuestTeam(): TeamInterface {
        return this.guestTeam;
    };

    /**
     * 
     * @param {Date} date
     * @returns {AbstractMatch}
     */
    public setDate(date: Date): AbstractMatch {
        this.date = date;
        return this;
    }

    /**
     * 
     * @returns {Date}
     */
    public getDate(): Date {
        return this.date;
    }
}