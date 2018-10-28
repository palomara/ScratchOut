
module.exports = app => {
    const getListMetodologia = (req, res) => {

        app.db('metodologia')
            .where({userId: req.user.id})
            .then(metodologia => res.json(metodologia))
            .catch(err => res.status(500).json(err))
    }
    const getMetodologia = (req, res) => {

        app.db('metodologia')
            .where({userId: req.user.id})
            .where('title', '=', req.body.title)
            .then(metodologia => res.json(metodologia))
            .catch(err => res.status(500).json(err))
    }
    const saveMetodologia = (req, res) => {
        req.body.userId = req.user.id

        app.db('metodologia')
            .insert(req.body)
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }
    return{getListMetodologia, getMetodologia, saveMetodologia}
}