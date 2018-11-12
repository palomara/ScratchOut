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
    const getCountHumor = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('month').toDate()

        app.db('humor')
            .countDistinct('id as Qtd')
            .where({ userId: req.user.id })
            .where('dtIncluded', '<=', date)
            .then(humorC => res.json(humorC))
            .catch(err => res.status(400).json(err))
    }
    const getCountRadiante = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('month').toDate()

        app.db('humor')
            .countDistinct('id as Qtd')
            .select('title')
            .where({ userId: req.user.id })
            .where('dtIncluded', '<=', date)
            .where('title', '=', 'radiante')
            .then(humorC => res.json(humorC))
            .catch(err => res.status(400).json(err))
    }
    const getCountFeliz = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('month').toDate()

        app.db('humor')
            .countDistinct('id as Qtd')
            .select('title')
            .where({ userId: req.user.id })
            .where('dtIncluded', '<=', date)
            .where('title', '=', 'feliz')
            .then(humorC => res.json(humorC))
            .catch(err => res.status(400).json(err))
    }
    const getCountNormal = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('month').toDate()

        app.db('humor')
            .countDistinct('id as Qtd')
            .select('title')
            .where({ userId: req.user.id })
            .where('dtIncluded', '<=', date)
            .where('title', '=', 'normal')
            .then(humorC => res.json(humorC))
            .catch(err => res.status(400).json(err))
    }
    const getCountTriste = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('month').toDate()

        app.db('humor')
            .countDistinct('id as Qtd')
            .select('title')
            .where({ userId: req.user.id })
            .where('dtIncluded', '<=', date)
            .where('title', '=', 'triste')
            .then(humorC => res.json(humorC))
            .catch(err => res.status(400).json(err))
    }
    const getCountHorrivel = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('month').toDate()

        app.db('humor')
            .countDistinct('id as Qtd')
            .select('title')
            .where({ userId: req.user.id })
            .where('dtIncluded', '<=', date)
            .where('title', '=', 'horivel')
            .then(humorC => res.json(humorC))
            .catch(err => res.status(400).json(err))
    }

    return {
        getHumor,
        saveHumor, 
        getCountFeliz,
        getCountHorrivel,
        getCountNormal,
        getCountRadiante,
        getCountTriste,
        getCountHumor
    }

};