const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/Book-Store")

const db = mongoose.connection.once("open", (error) => {
  console.log(error ? "db not connected :(": "db connected :)")
})

module.exports = db