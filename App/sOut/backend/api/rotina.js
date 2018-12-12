const moment = require('moment')

module.exports = app => {
    const getRotina = (req, res) => {
        const date = req.query.date ? req.query.date : moment().endOf('day').toDate()

        app.db('rotina_dia')
            .where({userId: req.user.id})
            .where('dtIncluded', '<=', date)
            .orderBy('dtIncluded')
            .then(rotina => res.json(rotina))
            .catch(err => res.status(500).json(err))
    }
    const getRotinaBetween = (req, res) => {
        const dateI = req.query.dateI ? req.query.dateI
            :  moment().startOf('week').toDate()
        const dateF = req.query.dateF ? req.query.dateF
            :  moment().endOf('week').toDate()
        console.log(dateI)
        app.db('rotina_dia')
            .where({userId: req.user.id})
            .whereBetween('dtIncluded', [dateI, dateF])
            .orderBy('dtIncluded')
            .then(rotina => res.json(rotina))
            .catch(err => res.status(500).json(err))
    }
    const saveRotina = (req, res) => {
        req.body.userId = req.user.id

        app.db('rotina_dia')
            .insert(req.body)
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))

    }

    return{getRotina, saveRotina, getRotinaBetween}
}