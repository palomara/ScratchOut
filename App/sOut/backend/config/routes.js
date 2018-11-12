module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)

    app.route('/tasks')
        .all(app.config.passport.authenticate())
        .get(app.api.task.getTasks)
        .post(app.api.task.save)

    app.route('/tasks/doneat')
        .all(app.config.passport.authenticate())
        .get(app.api.task.getTaskdonAt)

    app.route('/tasks/count')
        .all(app.config.passport.authenticate())
        .get(app.api.task.getCountTask)


    app.route('/tasks/:id')
        .all(app.config.passport.authenticate())
        .delete(app.api.task.remove)

    app.route('/tasks/:id/toggle')
        .all(app.config.passport.authenticate())
        .put(app.api.task.toggleTask)

    app.route('/humor')
        .all(app.config.passport.authenticate())
        .get(app.api.humor.getHumor)
        .post(app.api.humor.saveHumor)

    app.route('/humor/count')
        .all(app.config.passport.authenticate())
        .get(app.api.humor.getCountHumor)
    app.route('/humor/count/radiante')
        .all(app.config.passport.authenticate())
        .get(app.api.humor.getCountRadiante)
    app.route('/humor/count/feliz')
        .all(app.config.passport.authenticate())
        .get(app.api.humor.getCountFeliz)
    app.route('/humor/count/normal')
        .all(app.config.passport.authenticate())
        .get(app.api.humor.getCountNormal)
    app.route('/humor/count/triste')
        .all(app.config.passport.authenticate())
        .get(app.api.humor.getCountTriste)
    app.route('/humor/count/horrivel')
        .all(app.config.passport.authenticate())
        .get(app.api.humor.getCountHorrivel)

    app.route('/ambiente')
        .all(app.config.passport.authenticate())
        .get(app.api.ambiente.getAmbiente)
        .put(app.api.ambiente.saveAmbiente)

    app.route('/lista/metodologia')
        .all(app.config.passport.authenticate())
        .get(app.api.metodologia.getListMetodologia)

    app.route('/metodologia')
        .all(app.config.passport.authenticate())
        .get(app.api.metodologia.getMetodologia)
        .post(app.api.metodologia.saveMetodologia)

    app.route('/saude')
        .all(app.config.passport.authenticate())
        .get(app.api.saude.getSaude)
        .post(app.api.saude.saveSaude)

    app.route('/rotina')
        .all(app.config.passport.authenticate())
        .get(app.api.rotina.getRotina)
        .post(app.api.rotina.saveRotina)
};