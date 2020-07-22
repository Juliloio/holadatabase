// usamos express
const express = require('express');
// creamos un router
const router = express.Router();
// GET a /api/users (todos los usuarios)
router.get('/users', (req, res) => {
res.send('todos los usuarios');
});
// GET a /api/user/id (un solo usuario)
router.get('/user/:id', (req, res) => {
res.send('el usuario con id ' + req.params.id);
});
// hay que exportar el router para usarlo en index.js
module.exports = router;