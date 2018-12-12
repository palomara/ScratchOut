const moment = require('moment');

module.exports = app => {
    const getHumor = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('day').toDate();

        app.db('humor')
            .where({ userId: req.user.id })
            .where('dtIncluded', '<=', date)
            .orderBy('dtIncluded')
            .then(humor => res.json(humor))
            .catch(err => res.status(500).json(err))
    }
    const saveHumor = (req, res) => {
        req.body.userId = req.user.id;

        app.db('humor')
            .insert(req.body)
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }
    const getCountQtdHumor = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('month').toDate()

        app.db('humor')
            .countDistinct('id as Qtd')
            .where({ userId: req.user.id })
            .where('dtIncluded', '<=', date)
            .then(humorC => res.json(humorC))
            .catch(err => res.status(400).json(err))
    }
    const getCountHumor = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('month').toDate()

        app.db('humor')
            .count('title as freq')
            .select('title')
            .select('scale')
            .where({ userId: req.user.id })
            .where('dtIncluded', '<=', date)
            .groupBy('title')
            .then(humorC => res.json(humorC))
            .catch(err => res.status(400).json(err))
    }
    const getCountHumorBtw = (req, res) => {
        const dateI = req.query.dateI ? req.query.dateI
            : moment().startOf('week').toDate()
        const dateF = req.query.dateF ? req.query.dateF
            : moment().endOf('week').toDate()

        app.db('humor')
            .count('id as freq')
            .select('title')
            .select('scale')
            .where({ userId: req.user.id })
            .whereBetween('dtIncluded', [dateI, dateF])
            .groupBy('title')
            .orderBy('freq', 'desc')
            .then(tasksC => res.json(tasksC))
            .catch(err => res.status(400).json(err))
    }
    const getHumorBtw = (req, res) => {
        const dateI = req.query.dateI ? req.query.dateI
            : moment().startOf('week').toDate()
        const dateF = req.query.dateF ? req.query.dateF
            : moment().endOf('week').toDate()

        app.db('humor')
            .where({ userId: req.user.id })
            .whereBetween('dtIncluded', [dateI, dateF])
            .orderBy('dtIncluded')
            .then(humor => res.json(humor))
            .catch(err => res.status(500).json(err))
    }

    return {
        getHumor,
        saveHumor,
        getCountHumor,
        getCountQtdHumor,
        getCountHumorBtw,
        getHumorBtw
    }

};