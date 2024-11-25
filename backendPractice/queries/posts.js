const db = require("../db/index");

const fetchAllPosts = async (req, res, next) => {
  try {
    let posts = await db.any(
      "SELECT posts.id, owner_id, content, image_url, time_stamp, username, full_name, original_author FROM posts INNER JOIN users ON posts.owner_id = users.id ORDER BY posts.id DESC"
    );
    res.status(200).json({
      status: "Success",
      message: "Retrieved all posts",
      body: {
        posts,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: `Unsuccessful: ${err.message}`
    })
    next(err);
  }
};

const fetchAllUserPosts = async (req, res, next) => {
  try {
    let { id } = req.params;
    let posts = await db.any(
      "SELECT posts.id, owner_id, content, image_url, time_stamp, username, full_name, original_author FROM posts INNER JOIN users ON posts.owner_id = users.id WHERE posts.owner_id = $1 ORDER BY posts.id DESC",
      [id]
    );
    res.status(200).json({
      message: `Successfully retrieved posts: ${id}`,
      body: {
        posts,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: `Unable to retrieve posts: ${err.message}`,
    });
    next(err)
  }
};

const fetchSinglePost = async (req, res, next) => {
  try {
    let { id } = req.params;
    let post = await db.one("SELECT * FROM posts WHERE id = $1 ", [id]);
    res.status(200).json({
      message: `Successfully retrieved a single post for: ${id}`,
      body: {
        post,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: `Unsuccessful: ${err.message}`,
    });
    next(err)
  }
};

const deleteSinglePost = async (req, res, next) => {
  try {
    let { id } = req.params;
    let post = await db.one("DELETE FROM posts WHERE id = $1 RETURNING *", id);
    res.status(200).json({
      status: "Successful",
      message: "Successfully deleted a post!",
      body: {
        post,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: `Could not delete a post: ${err.message}`,
    });
    next(err)
  }
};

const addPost = async (req, res, next) => {
  try {
    let { content, image_url, original_author } = req.body;
    let owner_id = req.user_id;
    original_author = owner_id || original_author;

    let newPost = await db.one(
      "INSERT INTO posts (content, image_url, owner_id, original_author) VALUES ($1, $2, $3, $4) RETURNING *",
      [content, image_url, owner_id, original_author]
    );

    res.status(200).json({
      message: "Successfully created a new post",
      body: {
        newPost,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: `Post unsuccessful: ${err.message}`,
    });
    next(err);
  }
};

module.exports = {
  fetchAllPosts,
  fetchAllUserPosts,
  fetchSinglePost,
  addPost,
  deleteSinglePost,
};
