const express = require('express');
const app = express();
require('./src/bot/app.js')
require('dotenv').config()

app.get("/", (req, res) => {
    res.send('VênusBOT')
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Servidor Online na porta: " + PORT);
});