const { Client } = require('pg');

// Configurações de conexão com o banco de dados
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'loginadmin',
  password: '1234',
  port: 5432, // Porta padrão do PostgreSQL
});

// Conecta ao banco de dados
client.connect();

// Exemplo de consulta
client.query('SELECT * FROM usuarios', (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.rows);
  }
  client.end(); // Fecha a conexão
});