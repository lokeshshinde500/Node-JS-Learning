const bookModel = require("../models/booksModel")

module.exports.home = async (req, res) => {
  const bookList = await bookModel.find({})
  res.render("book", { bookList })
}

module.exports.add = async (req, res) => {
  try {

    if (req.body) {
      await bookModel.create(req.body)
      console.log("book added successfully.")
    }

    return res.redirect("/admin")

  } catch (error) {
    console.log("book not added !")
    return res.redirect("/admin")
  }
}

module.exports.delete = async (req, res) => {
  try {
    console.log(req.params.id)
    if (req.params.id) {
      await bookModel.findByIdAndDelete(req.params.id)
      console.log("book deleted successfully.")
    } else {
      console.log("book not deleted !")
    }
    res.redirect("/book")
  } catch (error) {
    console.log(error)
    console.log("book not deleted !")
    res.redirect("/book")
  }
}

module.exports.update = async (req, res) => {
  try {
    const updateBook = await bookModel.findById(req.query.id)
    console.log(updateBook)
    return res.render("update", { updateBook })
  } catch (error) {
    return res.redirect("/book")
  }
}

module.exports.updateRecord = async (req, res) => {
  try {
    console.log(req.params.id)
    const oldBook = await bookModel.findById(req.params.id)

    if (req.body) {

      if (req.body.cover == "") {
        req.body.cover = oldBook.cover
      }

      console.log(req.body)

      await bookModel.findByIdAndUpdate(req.params.id, req.body)
      console.log("book update successfully.")

    } else {
      console.log("book not updated !")
    }
    return res.redirect("/book")

  } catch (error) {
    console.log("book not updated !")
    return res.redirect("/book")
  }
}

