const { authSecreet } = require('../.env')
const passaport = require('passport')
const passaportJwt = require('passport-jwt')
const { Strategy, ExtractJwt} = passaportJwt


module.exports = app => {
    const params ={
        secretOrKey: authSecreet,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    }

    const strategy = new Strategy(params, (payload, done) =>{
        app.db('users')
            .where({id: payload.id})
            .first()
            .then(user =>{
                if(user){
                    done(null, {id: user.id, email: user.email})
                }else{
                    done(null, false)
                }
            })
        .catch(err => done(err, false))
    })
    passaport.use(strategy)
    return{
        initialize: () => passaport.initialize(),
        authenticate: () => passaport.authenticate('jwt', {session: false}),
    }
}