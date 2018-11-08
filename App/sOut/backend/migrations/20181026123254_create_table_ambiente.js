
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ambiente', function (table) {
        table.increments('id').primary()
        table.string('title').notNull()
        table.string('Status')
        table.datetime('dtIncluded')
        table.integer('userId').references('id').inTable('users').notNull()

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('ambiente')
};
