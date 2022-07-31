const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'tester',
    password: 'tester',
    database: 'siap'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
