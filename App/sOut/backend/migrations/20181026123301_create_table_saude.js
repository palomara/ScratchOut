
exports.up = function(knex, Promise) {
    return knex.schema.createTable('saude', function (table) {
        table.increments('id').primary()
        table.string('title').notNull()
        table.bool('ativFisica')
        table.datetime('dtIncluded')
        table.integer('userId').references('id').inTable('users').notNull()

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.createTable('saude')
};
