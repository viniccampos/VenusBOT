const express = require('express');
const Router = require('express');
const app = express();
const route = Router();
require('./src/bot/app.js')
require('dotenv').config()

route.get("/", (req, res) => {
    res.send("VenusBot");
    /*return res.json({
        success: true,
        message: "VênusBOT on"
    });*/
});

const PORT = process.env.PORT || 5000;

app.use(route);

app.listen(PORT, () => {
    console.log("Servidor Online na porta: " + PORT);
});