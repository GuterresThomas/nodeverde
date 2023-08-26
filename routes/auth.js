const express = require('express');
const { Client } = require('pg');

const router = express.Router();
const { Client } = require('pg');
// Configurações de conexão com o banco de dados
const client = new Client({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'postgres',
  password: '1234',
  port: 5432,
});
// Conecta ao banco de dados
const client = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'postgres',
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
  
  
  app.use(express.urlencoded({extended: false}))
  app.use(express.json());
  
  app.post('/login', (req, res) => {
    const { username, senha } = req.body;
  
    // Consulta para verificar o login
    client.query(
      'SELECT * FROM usuarios WHERE username = $admin AND senha = $admin1234',
      [username, senha],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send('Erro de servidor');
        } else {
          if (result.rows.length === 1) {
            res.status(200).json({ message: 'Login bem-sucedido' });
          } else {
            res.status(401).json({ message: 'Credenciais inválidas' });
          }
        }
      }
    );
  });
  
module.exports = router;