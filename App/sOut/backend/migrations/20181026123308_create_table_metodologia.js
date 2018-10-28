
exports.up = function(knex, Promise) {
    return knex.schema.createTable('metodologia', function (table) {
        table.increments('id').primary()
        table.string('title').notNull()
        table.string('descricao')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('metodologia')
};
