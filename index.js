const mongoose = require("mongoose");
const app = require("./app");
const {DB_HOST, DB_USER, DB_PASSWORD} = require("./config");

// Acceder a la configuración del archivo .env
require("dotenv").config();

// Acceder a variables del .env se usa process.env
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Conectados por el puerto ${port}`));

// mongodb+srv://admin_user:admin_user@cluster0.58nixrg.mongodb.net/
mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`)
  .then(()=>console.log("Conectado a mongoDB"))
  .catch((err)=>console.error(`Error al conectar a mongoDB ${err}`));
