const { db } = require("../db/index");

const fetchAllUsers = async (req, res, next) => {
  try {
    let users = await db.any("SELECT * FROM users");
    res.status(200).json({
      status: "Success",
      message: "Retrieved all users",
      body: {
        users,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

const fetchSingleUserById = async (req, res, next) => {
  try {
    let { id } = req.params;
    let singleUser = await db.one("SELECT * FROM users WHERE id = $1", [id]);
    res.status(200).json({
      status: "Successful",
      message: `Retrieved a user by id: ${id}`,
      body: {
        singleUser,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Unsuccessful",
      message: "Could not retrieve user by ID",
    });
    next(error);
  }
};

const deleteSingleUser = async (req, res, next) => {
  try {
    let { id } = req.params;
    let user = await db.one("DELETE FROM users WHERE id = $1 RETURNING *", [
      id,
    ]);
    req.status(200).json({
      message: "Successfully deleted a user",
      body: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Could not delete a user",
    });
  }
};

const createNewUser = async (req, res, next) => {
  try {
    let { email, username, full_name, profile_picture, bio, id } = req.body;
    let user = await db.one(
      "INSERT INTO users (email, username, full_name, profile_picture, bio, id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [email, username, full_name, profile_picture, bio, id]
    );
    res.status(200).json({
      status: "Success",
      message: "Created new User",
      user,
    });
  } catch (error) {
    res.status(404).json({
      status: "Unsuccessful",
      message: "Could not create user",
    });
    next(error);
  }
};

module.exports = {
  fetchAllUsers,
  fetchSingleUserById,
  deleteSingleUser,
  createNewUser
};
