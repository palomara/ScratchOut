const bcrypt = require('bcrypt-nodejs')
const smail = require('nodemailer')

module.exports = app => {
    const obterHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }

    const save = (req, res) => {
        obterHash(req.body.password, hash => {
            const password = hash

            app.db('users')
                .insert({ name: req.body.name, email: req.body.email, password })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).json(err))
        })
    }

    const forgotSenha = (req, res) => {

        const senha = Math.random().toString(36).substring(7)

        var transporter = smail.createTransport({
            service: 'gmail',
            auth: {
                user: 'luislopes116@gmail.com',
                pass: '8624luis1'
            }
        });
        var mailOptions = {
            from: 'luislopes116@gmail.com',
            to: req.body.email,
            subject: 'TROCA DE SENHA',
            text: `Sua nova senha é: ${senha}`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log(senha)
                obterHash(senha, hash => {
                    const newpassword = hash

                    app.db('users')
                        .where('email', '=', req.body.email)
                        .update({
                            password: newpassword,
                        })
                        .then(_ => res.status(204).send())
                        .catch(err => res.status(500).json(err))

                })
                console.log('Email sent: ' + info.response);
            }
        });

    }

    return { save, forgotSenha }
}