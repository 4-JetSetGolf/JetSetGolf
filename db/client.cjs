const { Client } = require('pg');
const client = new Client('postgres://localhost:5432/jet_set_golf');

module.exports = client;