const express = require("express")
const path = require("path")
const app = express()
const port = 8000
const db = require("./config/mongoose")



app.set("view engine", "ejs")
app.use(express.urlencoded())

app.use(express.static(path.join(__dirname, "assets")))
app.use("/views", express.static(path.join(__dirname, "views")))

app.listen(port, "127.0.0.1", (error) => console.log("server running on port", port))

app.use("/", require("./routes/indexRoutes"))
