
exports.up = function(knex, Promise) {
    return knex.schema.createTable('rotina_dia', function (table) {
        table.increments('id').primary()
        table.string('Texercicio')
        table.string('Tsono')
        table.datetime('dtIncluded')
        table.string('disposicao')
        table.integer('userId').references('id').inTable('users').notNull()
    })
};

exports.down = function(knex, Promise) {
  
};
