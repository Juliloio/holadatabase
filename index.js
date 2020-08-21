const express  = require('express');
const mongoose = require('mongoose');

const cors     = require('cors');

const router = require('./routes/api/cliente');

const port = process.env.PORT        || 3000;
const db   = process.env.MONGODB_URI || 'mongodb://localhost/hellodb';

const app = express();

app.use(cors());

mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
  })
  .catch(err => console.error(`Connection error ${err}`));

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});