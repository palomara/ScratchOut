const moment = require('moment')

module.exports = app => {
    const getSaude = (req, res) => {
        const date = req.query.date ? req.query.date : moment().endOf('day').toDate()

        app.db('saude')
            .where({userId: req.user.id})
            .where('dtIncluded', '<=', date)
            .orderBy('dtIncluded')
            .then(saude => res.json(saude))
            .catch(err => res.status(500).json(err))
    }
    const saveSaude = (req, res) => {
        req.body.userId = req.user.id

        app.db('saude')
            .insert(req.body)
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))

    }

    return{getSaude, saveSaude}
}