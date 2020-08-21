// ahora tambien importamos mongoose
const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

// importamos el router que creamos para la api
const router = require('./routes/api/user');

// puerto y base de datos
const port = process.env.PORT        || 3000;
const db   = process.env.MONGODB_URI || 'mongodb://localhost/hellodb';

const app = express();

app.use(cors());

// conexion a la base de datos
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
  })
.catch(err => console.error(`Connection error ${err}`));

// usamos el router
app.use('/api', router);

// el server escucha todo
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
