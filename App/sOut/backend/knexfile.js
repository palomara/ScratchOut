// Update with your config settings.

module.exports = {
    client: 'MySQL',
    connection: {
        host: 'soutdev.cuevqr10c1ly.sa-east-1.rds.amazonaws.com',
        port: '3000',
        database: 'soutroot',
        user:     'soutroot',
        password: 'soutroot211'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }

};