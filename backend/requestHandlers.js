const User = require("./models/user");
const debug = true;

function getUsers(req, res) {
  debug && console.log("----------GET USER----------");
  User.find((err, users) => {
    if (err) {
      debug && console.log("Error getting users");
      res.end("Error getting users");
    } else {
      res.status(200);
      res.json(users);
    }
  });
}

function createUser(req, res) {
  debug && console.log("----------CREATE USER----------");

  //check that the request body is well-formed
  const { fName, lName, sex, age, password } = req.body;
  if (fName && lName && sex && age && password) {
    const user = new User({
      fName: fName,
      lName: lName,
      sex: sex,
      age: age,
      password: password
    });
    user.save((err, user) => {
      if (err) {
        debug &&
          console.log("Error saving new user: " + JSON.stringify(req.body));
        res.status(500);
        res.json({ result: "Error" });
      } else {
        debug && console.log("Saved new user: " + user);
        res.status(200);
        res.json({ result: "Success" });
      }
    });

    //malformed request body
  } else {
    debug && console.log("Bad request: " + JSON.stringify(req.body));
    res.status(400);
    res.json({ message: "Bad request" });
  }
}

function deleteUser(req, res) {
  debug && console.log("----------DELETE USER----------");

  //check that the request body is well-formed
  if (req.body.id) {
    User.deleteOne({ _id: req.body.id }, (err, user) => {
      if (err) {
        debug &&
          console.log("Error deleting user: " + JSON.stringify(req.body));
        res.status(500);
        res.json({ result: "Error" });
      } else {
        debug && console.log("Deleted user: " + JSON.stringify(req.body));
        res.status(200);
        res.json({ result: "Success" });
      }
    });

    //malformed request body
  } else {
    debug && console.log("Bad request: " + JSON.stringify(req.body));
    res.status(400);
    res.json({ message: "Bad request" });
  }
}

function updateUser(req, res) {
  debug && console.log("----------UPDATE USER----------");

  //check that the request body is well-formed
  const { id, fName, lName, sex, age, password } = req.body;
  if (id && fName && lName && sex && age && password) {
    const user = {
      fName: fName,
      lName: lName,
      sex: sex,
      age: age,
      password: password
    };
    User.findOneAndUpdate({ _id: id }, user, { new: true }, (err, user) => {
      if (err) {
        debug &&
          console.log("Error updating user: " + JSON.stringify(req.body));
        res.status(500);
        res.json({ result: "Error" });
      } else {
        debug && console.log("Updated user: " + user);
        res.status(200);
        res.json({ result: "Success" });
      }
    });

    //malformed request body
  } else {
    debug && console.log("Bad request: " + JSON.stringify(req.body));
    res.status(400);
    res.json({ message: "Bad request" });
  }
}

module.exports = { getUsers, createUser, deleteUser, updateUser };
