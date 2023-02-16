const express = require('express');
const app = express();
const path = require('path');
const routes = require('./src/routes/routes');
require('./src/bot/app');
require('dotenv').config();
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, './src/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Servidor Online na porta: " + PORT);
});