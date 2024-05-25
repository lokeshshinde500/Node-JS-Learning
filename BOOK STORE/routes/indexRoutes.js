const express = require("express")
const routes = express.Router()


routes.get("/admin", (req, res) => res.render("index"))
routes.use("/book", require("./bookRoutes"))


module.exports = routes