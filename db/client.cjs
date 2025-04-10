const { Client } = require('pg');
const client = new Client(process.env.DATABASE_URL || 'postgres://joeva:Vanpelt1@localhost:5432/jet_set_golf');

module.exports = client;