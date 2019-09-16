const express = require('express');

const server = express();
const authRouter = require('./authentication/auth-router')

server.get('/', (req, res) => {
    res.send('up')
})

server.use('/api/auth', authRouter)

module.exports = server;