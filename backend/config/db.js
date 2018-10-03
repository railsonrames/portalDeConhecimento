const config = require('../knexfile.js');
const knex = require('knex')(config);

knex.migrate.latest([config]); // temporáriamente ativo, para fins de desenvolvimento - o mais aconselhável é atuar manualmente através do comando "knex migrate:latest" via bash
module.exports = knex;