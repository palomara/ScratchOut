const moment = require('moment')

module.exports = app =>{
    const getTasks = (req, res) => {
        const date = req.query.date ? req.query.date 
        : moment().endOf('day').toDate()
        
        app.db('tasks')
            .where({ userId: req.user.id})
            .where('estimateAt', '<=', date)
            .orderBy('estimateAt')
            .then(tasks => res.json(tasks))
            .catch(err => res.status(500).json(err))
    }

    const save = (req, res) => {
        if(!req.body.desc.trim()){
            return res.status(400).send('Descrição é um campo obrigatório')
        }
        req.body.userId = req.user.id

        app.db('tasks')
            .insert(req.body)
            .then(_=> res.status(204).send())
            .catch(err => res.status(400).json(err))
    }
    
    const remove = (req, res) => {
        app.db('tasks')
            .where({id: req.params.id, userId: req.user.id})
            .del()
            .then(rowsDeleted => {
                    if(rowsDeletd > 0){
                        res.status(204).send()
                    }else{
                        const msg = `Não foi encontrado taks com id ${req.params.id}` 
                        res.status(400).send(msg)
                    }
                
                })
            .catch(err => res.status(400).json(err))
    }


}