const express = require('express');
const { Client } = require('pg');
const app = express();
const router = express.Router();
// Configurações de conexão com o banco de dados
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

  const client2 = new Client({
      user: 'usuario_verde',
      host: '172.27.32.199',
      database: 'VERDE', // Nome do segundo banco de dados
      password: 'fou3%sdf',
      port: 5432, // Porta padrão do PostgreSQL
    });
    client2.connect();
    
    client2.query('SELECT * FROM avaliacoes', (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res.rows);
    }
    client.end(); // Fecha a conexão
  });

    app.use(express.urlencoded({extended: false}))
    app.use(express.json());

  app.post('/databases', (req, res) => {
    
    // Conecta ao segundo banco de dados
    client2.query(
      'SELECT * FROM avaliacoes WHERE id=1',
      (err, result) => {
        if (err) {
          console.error(err);
          // Trate o erro e envie uma resposta de erro se necessário
          res.status(500).json({ message: 'Erro de servidor' });
          return;     
        } else {
          if (result.rows.length > 0) {
            // Aqui, você pode processar os resultados da consulta
            console.log(result.rows);
            res.status(200).json(result.rows);
          } else {
            res.status(404).json({ message: 'Nenhuma tabela encontrada' });
          }
        }
      }
    );
  });
  
module.exports = router;