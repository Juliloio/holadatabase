// usamos express
const express = require('express');
// creamos un router
const router = express.Router();
// importamos el modelo User
// la ruta del archivo del modelo es relativa a la de user.js
const User = require('../../models/User');
// GET a /api/users (todos los usuarios)
router.get('/users', (req, res) => {
User.find((err, users) => {
if (err) throw err;
res.status(200).json(users);
});
});
// GET a /api/user/id (un solo usuario)
router.get('/user/:id', (req, res) => {
User.findOne({ id: req.params.id }, (err, user) => {
if (err) throw err;
res.status(200).json(user);
});
});
// hay que exportar el router para usarlo en index.js
module.exports = router;