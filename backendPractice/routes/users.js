const users = require('express').Router();

const {
  fetchAllUsers,
  fetchSingleUserById,
  deleteSingleUser,
  createNewUser,
  editUser
} = require("../queries/users");

users.get("/", fetchAllUsers);
users.get("/:id", fetchSingleUserById)
users.delete("/:id", deleteSingleUser)
users.post("/addUser", createNewUser)
users.patch("/edit", editUser)

module.exports = users;
