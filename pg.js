const { Client } = require('pg');

// Configurações de conexão com o banco de dados
const client = new Client({
  user: 'seu_usuario',
  host: 'localhost',
  database: 'nome_do_banco',
  password: 'sua_senha',
  port: 5432, // Porta padrão do PostgreSQL
});

// Conecta ao banco de dados
client.connect();

// Exemplo de consulta
client.query('SELECT * FROM sua_tabela', (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.rows);
  }
  client.end(); // Fecha a conexão
});