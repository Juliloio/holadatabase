const express = require('express');

const router = express.Router();

const User = require('../../models/Cliente');

router.get('/clientes', (req, res) => {
  User.find((err, clientes) => {
    if (err) throw err;
    res.status(200).json(clientes);
    });
});

router.get('/cliente/:id', (req, res) => {
  User.findOne({ id: req.params.id }, (err, cliente) => {
    if (err) throw err;
    res.status(200).json(cliente);
    });
});

module.exports = router;