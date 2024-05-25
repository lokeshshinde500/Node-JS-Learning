const express = require("express")
const routes = express.Router()
const bookController = require("../controllers/bookController")


routes.get("/", bookController.home)
routes.post("/add", bookController.add)
routes.get("/delete/:id", bookController.delete)
routes.get("/update", bookController.update)
routes.post("/updateRecord/:id", bookController.updateRecord)


module.exports = routes