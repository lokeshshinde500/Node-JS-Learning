const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
  bookName: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  bookName: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: true
  }
})

const bookModel = mongoose.model("book", bookSchema)

module.exports = bookModel