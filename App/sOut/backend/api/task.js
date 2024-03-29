const moment = require('moment')

module.exports = app => {
    const getTasks = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('day').toDate()

        app.db('tasks')
            .where({ userId: req.user.id })
            .where('estimateAt', '<=', date)
            .orderBy('estimateAt')
            .then(tasks => res.json(tasks))
            .catch(err => res.status(400).json(err))
    }
    const getTaskdonAt = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('month').toDate()

        app.db('tasks')
            .count('id as TarefasConcluidas')
            .where({ userId: req.user.id })
            .where('doneAt', '!=', '')
            .where('doneAt', '<=', date)
            .then(tasksC => res.json(tasksC))
            .catch(err => res.status(400).json(err))
    }

    const getCountTask = (req, res) => {
        const date = req.query.date ? req.query.date
            : moment().endOf('month').toDate()

        app.db('tasks')
            .count('id as tarefas')
            .where({ userId: req.user.id })
            .then(task => res.json(task))
            .catch(err => res.status(400).json(err))

    }

    const save = (req, res) => {
        if (!req.body.title.trim()) {
            return res.status(400).send('Descrição é um campo obrigatório')
        }

        req.body.userId = req.user.id

        app.db('tasks')
            .insert(req.body)
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const remove = (req, res) => {
        app.db('tasks')
            .where({ id: req.params.id, userId: req.user.id })
            .del()
            .then(rowsDeleted => {
                if (rowsDeleted > 0) {
                    res.status(204).send()
                } else {
                    const msg = `Não foi encontrada task com id ${req.params.id}.`
                    res.status(400).send(msg)
                }
            })
            .catch(err => res.status(400).json(err))
    }

    const updateTaskDoneAt = (req, res, doneAt) => {
        app.db('tasks')
            .where({ id: req.params.id, userId: req.user.id })
            .update({ doneAt })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const toggleTask = (req, res) => {
        app.db('tasks')
            .where({ id: req.params.id, userId: req.user.id })
            .first()
            .then(task => {
                if (!task) {
                    const msg = `Task com id ${req.params.id} não encontrada.`
                    return res.status(400).send(msg)
                }

                const doneAt = task.doneAt ? null : new Date()
                updateTaskDoneAt(req, res, doneAt)
            })
            .catch(err => res.status(400).json(err))
    }

    const getTaskBetween = (req, res) => {
        const dateI = req.query.dateI ? req.query.dateI
            : moment().startOf('week').toDate()
        const dateF = req.query.dateF ? req.query.dateF
            : moment().endOf('week').toDate()

        app.db('tasks')
            .count('id as TarefasConcluidas')
            .where({ userId: req.user.id })
            .where('doneAt', '!=', '')
            .whereBetween('doneAt', [dateI, dateF])
            .then(tasksC => res.json(tasksC))
            .catch(err => res.status(400).json(err))
    }

    return {
        getTasks,
        save,
        remove,
        toggleTask,
        getTaskdonAt,
        getCountTask,
        getTaskBetween
    }
}