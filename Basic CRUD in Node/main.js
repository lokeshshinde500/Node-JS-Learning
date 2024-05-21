const express = require("express");
const path = require("path");

const port = 8000;
const app = express();

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded())

const userList = []


app.get("/", (req, res) => {
  res.render("home", { userList })
})

// insert
app.post("/addUser", (req, res) => {
  console.log(req.body)
  req.body.id = Math.round(Math.random() * 10000)
  userList.push(req.body)
  return res.redirect("/")
})

// delete
app.get("/deleteUser/:id", (req, res) => {
  console.log(req.params.id)

  const index = userList.findIndex((v, i) => v.id == req.params.id)
  userList.splice(index, 1)
  return res.redirect("/")
})

// send data on update page
app.get("/updateUser", (req, res) => {
  console.log(req.query.id)
  const updateUser = userList.find((v, i) => v.id == req.query.id)
  if (updateUser) {
    return res.render("update", { updateUser })
  }
  return res.redirect("/")
})

// update
app.post("/updateRecord", (req, res) => {
  console.log(req.body)

  const index = userList.findIndex((v, i) => v.id == req.query.id)

  if (index != -1) {
    req.body.id = req.query.id
    userList[index] = req.body
  }

  return res.redirect("/")
})

app.listen(port, (error) => console.log("server running on port", port))



