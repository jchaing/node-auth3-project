// Dependencies
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const jwt = require('jsonwebtoken');

// Routers
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

// Server
const server = express();

// Middlewares
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

// Test API
server.get('/', (req, res) => {
  res.json({ api: "It's alive!!!" });
});

// Test Token
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
