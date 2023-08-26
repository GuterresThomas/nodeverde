const http = require('http');

const { Client } = require('pg');


const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, Node.js!');
});

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




const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
