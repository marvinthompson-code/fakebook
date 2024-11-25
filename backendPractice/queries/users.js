const db = require("../db/index")

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
    res.status(400).json({
      message: `${err.message}`
    })
    next(err)
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
  } catch (err) {
    res.status(404).json({
      status: "Unsuccessful",
      message: `Could not retrieve user by ID: ${err.message}`,
    });
    next(err);
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
  } catch (err) {
    res.status(400).json({
      message: `Could not delete a user: ${err.message}`,
    });
    next(err)
  }
};

const createNewUser = async (req, res, next) => {
  try {
    let { email, username, full_name, profile_picture, bio, id } = req.body;
    let user = await db.one(
      "INSERT INTO users (id, full_name, username, email, profile_picture, bio) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [id, full_name, username, email, profile_picture, bio]
    );
    res.status(200).json({
      status: "Success",
      message: "Created new User",
      body: user,
    });
  } catch (err) {
    res.status(404).json({
      status: "Unsuccessful",
      message: `Could not create user: ${err.message}`,
    });
    next(err);
  }
};

module.exports = {
  fetchAllUsers,
  fetchSingleUserById,
  deleteSingleUser,
  createNewUser
};
