
exports.up = function(knex, Promise) {
    return knex.schema.createTable('humor', function (table) {
        table.increments('id').primary()
        table.string('title').notNull()
        table.string('escala').notNull()
        table.datetime('dtIncluded')
        table.integer('userId').references('id').inTable('users').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('humor')
};
