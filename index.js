module.exports = {

    AbstractClass:{
        Team: require('./commonjs/team/AbstractTeam').AbstractTeam,
        Player: require('./commonjs/player/AbstractPlayer').AbstractPlayer,
        Match: require('./commonjs/match/AbstractMatch').AbstractMatch
    },
    
    BasketClass:{
        Team: require('./commonjs/basket/BasketTeam').BasketTeam,
        Player: require('./commonjs/basket/BasketPlayer').BasketPlayer,
        Match: require('./commonjs/basket/BasketMatch').BasketMatch
    }
};