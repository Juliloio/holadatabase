const express = require('express');

const router = express.Router();

const User = require('../../models/User');

router.get('/User', (req, res) => {
  User.find((err, users) => {
    if (err) throw err;
    res.status(200).json(users);
    });
});

router.get('/User/:id', (req, res) => {
  User.findOne({ id: req.params.id }, (err, user) => {
    if (err) throw err;
    res.status(200).json(user);
    });
});

module.exports = router;
