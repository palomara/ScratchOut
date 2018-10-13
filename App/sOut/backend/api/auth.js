const { authSecreet } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app =>{
    const signin = async (req, res) => {
        
        if(!req.body.email || !req.body.password){
            return res.status(400).send('dados incompletos')
        }

            const user = await app.db('users')
                .where({email: req.body.email})
                .first()

            if (user){
                bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                    if(err || !isMatch){
                        return res.status(400).send('dados incompletos')
                    }
            
                const payload = { id: user.id}
                res.json({
                    nome: user.name,
                    email: user.email,
                    token: jwt.encode(payload, authSecreet),
                })            
            })
        }else{
            res.status(400).send('Problemas com a autentificação')
        }
    }

    return {signin}
}