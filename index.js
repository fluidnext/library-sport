module.exports = {
    Basket:{
        Match: require('./commonjs/basket/BasketMatch').BasketMatch,
        Team: require('./commonjs/basket/BasketTeam').BasketTeam,
        Player: require('./commonjs/basket/BasketPlayer').BasketPlayer,
        Score: require('./commonjs/basket/BasketScore').BasketScore
    },
    Soccer:{
        Match: require('./commonjs/soccer/SoccerMatch').SoccerMatch,
        Team: require('./commonjs/soccer/SoccerTeam').SoccerTeam,
        Player: require('./commonjs/soccer/SoccerPlayer').SoccerPlayer,
        Score: require('./commonjs/soccer/SoccerScore').SoccerScore
    }
};