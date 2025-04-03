const { Client } = require('pg');
const client = new Client('postgres://localhost:3000/jet_set_golf');

module.exports = client;