const mongoose = require('mongoose');

const User = require('./models/User');

const db = 'mongodb+srv://hellodb:melincue@cluster0.udylw.mongodb.net/hellodb?retryWrites=true&w=majority';

const users = [
  {
    id: 1,
    nombre: 'Juan',
    compras: ['Galletas', 'Cafe', 'Torta'],
    precio: 25
  },
  {
    id: 2,
    nombre: 'Maria',
    compras: ['Tomate', 'Lechuga', 'Zanahorias'],
    precio: 50
  },
  {
    id: 3,
    nombre: 'Roberto',
    compras: ['Alcohol en Gel', 'Papel Higienico', 'Barbijos'],
    precio: 150
  },
  {
    id: 4,
    nombre: 'Ana',
    compras: ['Balanceado', 'Agua', 'Jabon'],
    precio: 20
  }
];

mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
    console.log('Populating DB...');
    User.insertMany(users, (err, users) => {
      if (err) throw err;
      console.log(`${users.length} documents inserted!`);
      mongoose.connection.close();
    });
  })
  .catch(err => console.error(`Connection error ${err}`));
