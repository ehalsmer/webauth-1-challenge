const express = require('express');
const middleware = require('../middleware');
const authRouter = express.Router();
const db = require('../../data/db-config');

authRouter.get('/', (req, res) => {
    db('users')
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

authRouter.post('/join', (req, res) => {
    let {username, password} = req.body;
})

module.exports = authRouter;