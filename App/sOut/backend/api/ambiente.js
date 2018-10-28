const moment = require('moment');

module.exports = app =>{
    const getAmbiente = (req, res)=>{
        const date = req.query.date ? req.query.date : moment().endOf('day').toDate()

        app.db('ambiente')
            .where({userId: req.user.id})
            .where('dtIncluded', '<=', date)
            .orderBy('dtIncluded')
            .then(ambiente => res.json(ambiente))
            .catch(err => res.status(500).json(err))
    }
    const saveAmbiente = (req, res) => {
        req.body.userId = res.user.id;

        app.db('ambiente')
            .insert(req.body)
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    return{getAmbiente, saveAmbiente}
};