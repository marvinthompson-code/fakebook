const users = require("express").Router();

const {
  fetchAllUsers,
  fetchSingleUserById,
  deleteSingleUser,
  createNewUser,
} = require("../queries/users");

users.get("/", fetchAllUsers);
users.get("/:id", fetchSingleUserById)
users.delete("/:id", deleteSingleUser)
users.post("/addUser", createNewUser)

module.exports = users;
