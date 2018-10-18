// Update with your config settings.

module.exports = {
    client: 'MySQL',
    connection: {
        database: 'sout',
        user:     'root',
        password: ''
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }

};