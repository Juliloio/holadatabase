// necesitamos importar mongoose
const mongoose = require('mongoose');
// los modelos se crean a partir de un schema
const UserSchema = new mongoose.Schema({
id: Number,
name: String,
mail: String,
birthday: Date
});
// el schema describe la pinta de un documento de la coleccion
// creamos el modelo llamando a mongoose.model(nombre, schema)
const User = mongoose.model('User', UserSchema);
// hay que exportar el modelo para usarlo despues en otros archivos
module.exports = User;