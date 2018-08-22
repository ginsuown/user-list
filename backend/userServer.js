const express = require("express");
const mongoose = require("mongoose");
const requestHandlers = require("./requestHandlers");
const bodyParser = require("body-parser");

const app = express();
// create db connection
mongoose.connect("mongodb://localhost/userList");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Connected to db userlist");
});

//body parser middleware
app.use(bodyParser.json());

//user routes
app.get("/users", requestHandlers.getUsers);
app.post("/users", requestHandlers.createUser);
app.delete("/users", requestHandlers.deleteUser);
app.put("/users", requestHandlers.updateUser);

app.listen(8888, () => {
  console.log("Server started on port 8888");
});
