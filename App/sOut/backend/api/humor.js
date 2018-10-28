const moment = require('moment');

module.exports = app => {
    const getHumor = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('day').toDate();

        app.db('humor')
            .where({userId: req.user.id})
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

    return{getHumor, saveHumor}

};