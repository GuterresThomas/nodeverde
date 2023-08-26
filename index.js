const express = require('express');
const app = express();
const path = require('path');


const http = require('http');


const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);


const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, Node.js!');
});

// Configurações de conexão com o banco de dados





const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
