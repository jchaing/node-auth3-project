const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.json({api: "It's alive!!!"});
});

// test token

server.get('/token', (req, res) => {
  const payload = {
    subject: 'test token',
    userid: 'tester',
    favoriteHotSauce: 'tapatio'
  };

  const secret = 'wethotuwasdead';

  const options = {
    expiresIn: '1d'
  };

  const token = jwt.sign(payload, secret, options);

  res.json(token);
});

module.exports = server;
