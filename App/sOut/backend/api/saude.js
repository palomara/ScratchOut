const moment = require('moment')

module.exports = app => {
    const getSaude = (req, res) => {
        const date = req.query.date ? req.query.date : moment().endOf('day').toDate()

        app.db('saude')
            .where({ userId: req.user.id })
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
    const getCountDC = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('month').toDate()

        app.db('saude')
            .countDistinct('id as Qtd')
            .select('sintomas')
            .where({ userId: req.user.id })
            .where('dtIncluded', '<=', date)
            .where('sintomas', '=', 'dor de cabeca')
            .then(sintomasC => res.json(sintomasC))
            .catch(err => res.status(400).json(err))
    }
    const getCountDNC = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('month').toDate()

        app.db('saude')
            .countDistinct('id as Qtd')
            .select('sintomas')
            .where({ userId: req.user.id })
            .where('dtIncluded', '<=', date)
            .where('sintomas', '=', 'dor nas costas')
            .then(sintomasC => res.json(sintomasC))
            .catch(err => res.status(400).json(err))
    }
    const getCountDNB = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('month').toDate()

        app.db('saude')
            .countDistinct('id as Qtd')
            .select('sintomas')
            .where({ userId: req.user.id })
            .where('dtIncluded', '<=', date)
            .where('sintomas', '=', 'dor de barriga')
            .then(sintomasC => res.json(sintomasC))
            .catch(err => res.status(400).json(err))
    }
    const getCountFB = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('month').toDate()

        app.db('saude')
            .countDistinct('id as Qtd')
            .select('sintomas')
            .where({ userId: req.user.id })
            .where('dtIncluded', '<=', date)
            .where('sintomas', '=', 'febre')
            .then(sintomasC => res.json(sintomasC))
            .catch(err => res.status(400).json(err))
    }
    const getCountIN = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('month').toDate()

        app.db('saude')
            .countDistinct('id as Qtd')
            .select('sintomas')
            .where({ userId: req.user.id })
            .where('dtIncluded', '<=', date)
            .where('sintomas', '=', 'insonia')
            .then(sintomasC => res.json(sintomasC))
            .catch(err => res.status(400).json(err))
    }
    const getCountFA = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('month').toDate()

        app.db('saude')
            .countDistinct('id as Qtd')
            .select('sintomas')
            .where({ userId: req.user.id })
            .where('dtIncluded', '<=', date)
            .where('sintomas', '=', 'fadiga')
            .then(sintomasC => res.json(sintomasC))
            .catch(err => res.status(400).json(err))
    }
    const getCountES = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('month').toDate()

        app.db('saude')
            .countDistinct('id as Qtd')
            .select('sintomas')
            .where({ userId: req.user.id })
            .where('dtIncluded', '<=', date)
            .where('sintomas', '=', 'estresse')
            .then(sintomasC => res.json(sintomasC))
            .catch(err => res.status(400).json(err))
    }
    const getCountDE = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('month').toDate()

        app.db('saude')
            .countDistinct('id as Qtd')
            .select('sintomas')
            .where({ userId: req.user.id })
            .where('dtIncluded', '<=', date)
            .where('sintomas', '=', 'doente')
            .then(sintomasC => res.json(sintomasC))
            .catch(err => res.status(400).json(err))
    }

    return {
        getSaude,
        saveSaude,
        getCountDC,
        getCountDNB,
        getCountDNC,
        getCountFA,
        getCountFB,
        getCountIN,
        getCountES,
        getCountDE
    }
}