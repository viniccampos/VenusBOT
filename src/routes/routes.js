const routes = require("express").Router();

routes.get("/", (req, res) =>{
    return res.render("index");
});

module.exports = routes;